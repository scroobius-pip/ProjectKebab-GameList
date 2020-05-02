import Section from '../components/Section';
import { Row, Col, Button, Spinner, Toast } from 'react-bootstrap';
import Editor from '../components/Editor';
import UserList, { UserGames } from '../components/UserList';
import { withAuth } from '@components/WithAuth';
import { isEmpty, has } from 'lodash'
import React, { useState, useContext, useEffect } from 'react';
import mergeOperation, { Operation } from 'functions/utils/mergeOperation';
import { IUserGameDetailsStatus } from 'generated/apolloComponents';
import { OnChangeDataUserList } from '@components/UserList/UserList.Table';
import { UserGame } from '@components/UserList/UserList';
import addGames from 'functions/graphql/mutations/addGames';
import { ApolloClient } from 'apollo-boost';
import { getApolloContext } from 'react-apollo';
import removeGames from 'functions/graphql/mutations/removeGames';
import updateGames from 'functions/graphql/mutations/updateGames';
import getMyGamesAndDescription from 'functions/graphql/queries/getMyGamesAndDescription';
import mapToUserGame from 'graphql/utils/mapToUserGame';
import { withApollo } from 'functions/utils/apollo';
import LoadingButton from '@components/LoadingButton';
import { useRouter, Router } from 'next/router';
import WithLayout from '@components/WithLayout';
import updateDescription from 'functions/graphql/mutations/updateDescription';
import useWarnIfUnsavedChanges from 'functions/utils/useWarnIfUnsavedChanges';




interface Props {
    description: string
    userGames: UserGames
    premiumClicked?: () => {}
}

const Page = ({ description, userGames: initialUserGames, premiumClicked }: Props) => {

    const [hasGameOperations, setHasGameOperations] = useState<{ [id: string]: Operation<OnChangeDataUserList> }>({})
    const [wantGameOperations, setWantGameOperations] = useState<{ [id: string]: Operation<OnChangeDataUserList> }>({})
    const [changedDescription, setDescription] = useState('')
    const [isSaved, setIsSaved] = useState(true)
    const [saving, setSaving] = useState(false)
    useWarnIfUnsavedChanges("You've got unsaved changes, you sure ?")(saving ? false : !isSaved)

    useEffect(() => {
        setIsSaved(isEmpty(hasGameOperations) && isEmpty(wantGameOperations) && !changedDescription.length)
    }, [hasGameOperations, wantGameOperations, changedDescription])

    const sendOperations = (status: IUserGameDetailsStatus, client: ApolloClient<any>) => async (operations: { [id: string]: Operation<OnChangeDataUserList> }, ) => {
        const addOperations: UserGame[] = []
        const updateOperations: UserGame[] = []
        const deleteOperations: Array<{ id: string }> = []
        console.log(operations)
        for (const id in operations) {
            if (!operations[id]) continue

            if (operations[id].add) {
                addOperations.push(operations[id].add.value)
                continue // you have to add a game before you can update or delete it
            }
            if (operations[id].update) {
                updateOperations.push(operations[id].update.value)
            }
            if (operations[id].delete) {
                deleteOperations.push({ id })
            }
        }


        const resultAdd = await addGames(status)(addOperations, client)
        const resultDelete = await removeGames(deleteOperations, client)
        const resultUpdate = await updateGames(status)(updateOperations, client)
        if (!(resultAdd.success && resultDelete.success && resultUpdate.success)) {
            console.error(resultAdd)
            if (resultAdd.message === 'UPGRADE_MEMBERSHIP') {
                premiumClicked()
            }
            console.error(resultDelete)
            console.error(resultUpdate)
        }
        return resultAdd.success && resultDelete.success && resultUpdate.success
    }

    // const router = useRouter()
    const apolloClient = useContext(getApolloContext()).client
    const router = useRouter()
    const hasSendOperations = sendOperations(IUserGameDetailsStatus.Has, apolloClient)
    const wantSendOperations = sendOperations(IUserGameDetailsStatus.Want, apolloClient)




    const handleRouteChange = async () => {
        console.log('started routing')

        if (!isSaved) {
            await saveOperations()
        }
    }

    useEffect(() => {
        router.events.on('routeChangeStart', handleRouteChange)
    }, [])


    const handleHasChange: (changeType: "delete" | "add" | "update", data: OnChangeDataUserList) => any = (changeType, data) => {

        const mergedOperations = mergeOperation<OnChangeDataUserList>({
            ...(hasGameOperations[data.id] || {}),
            [changeType]: data
        })



        setHasGameOperations({
            ...hasGameOperations,
            [data.id]: mergedOperations
        })

        console.log(mergeOperation(hasGameOperations));
    }

    const handleWantChange: (changeType: "delete" | "add" | "update", data: OnChangeDataUserList) => any = (changeType, data) => {
        const mergedOperations = mergeOperation<OnChangeDataUserList>({
            ...(wantGameOperations[data.id] || {}),
            [changeType]: data
        })



        setWantGameOperations({
            ...wantGameOperations,
            [data.id]: mergedOperations
        })

        console.log(mergeOperation(wantGameOperations))
    }


    const saveOperations = async () => {
        console.log('sending')
        setSaving(true)

        const hasResult = await hasSendOperations(hasGameOperations)
        const wantResult = await wantSendOperations(wantGameOperations)
        const descriptionResult = await updateDescription(changedDescription, apolloClient)

        if (hasResult) {
            setHasGameOperations({})
        }
        if (wantResult) {
            setWantGameOperations({})
        }
        if (descriptionResult.success) {
            setDescription('')
        }

        setSaving(false)

    }


    return <>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 20, flexDirection: 'column' }}>
            <div>
                <span>
                    {isSaved ?
                        <Button onClick={() => router.push('/p/me')} variant='outline-primary'>View List</Button>
                        : <LoadingButton
                            onClick={async () => {

                                await saveOperations()
                                document.location.reload()

                            }}
                            loadingText='Saving'
                            normalText='Save' />}
                </span>
            </div>

        </div>
        <Row>
            <Col md={12} style={{ marginBottom: 30 }}>
                <Section heading='Details.'>
                    <Editor onChange={setDescription} initialContent={description} />
                </Section>

            </Col>
            <Col md={12}>
                <Section heading='Your List.'>

                    <UserList
                        onHasChange={handleHasChange}
                        onWantChange={handleWantChange}
                        data={initialUserGames}
                        editable
                    />

                </Section>
            </Col>
        </Row>
    </>
}

Page.getInitialProps = async ({ apolloClient, ...ctx }): Promise<Props> => {

    const data = await getMyGamesAndDescription(apolloClient)

    return {
        userGames: {
            has: data.hasGames.map(mapToUserGame()),
            want: data.wantedGames.map(mapToUserGame()),

        },
        description: data.info.description || !data.hasGames.length && !data.wantedGames.length ? InitialDescription : ''
    }
}

export default withApollo(withAuth(WithLayout(Page)))

const InitialDescription = `
**Hello fellow human thanks for using rade. **\n\nA quick guide to using this list: \n\nUse the below **\"Your List.\"** section to add games and items you own and want, the description box should be used to describe the game/item in detail.\n\nYou could use this **\"Details.\"** text box to: \n\n- introduce yourself talk about the general terms of trade, \n- show a link to how you could be contacted. \n- List items that can't be added in the \"list\" section. \n\n**Here's an example: **\n\nHello all! I accumulated a lot of duplicate so I'm gonna post it here! I'll be more willing to trade for RPG games/Stuff on my wishlist but you can still offer away! Steam keys unless stated otherwise. I'm located in Canada. \n\nMy steam wishlist -  [http://steamcommunity.com/id/makenshi/wishlist](http://steamcommunity.com/id/makenshi/wishlist \"http://steamcommunity.com/id/makenshi/wishlist\") \n\nContact me through steamtrades: [https://www.steamtrades.com/user/76561198269203928](https://www.steamtrades.com/user/76561198269203928 \"https://www.steamtrades.com/user/76561198269203928\")\n\n​\n\n**And another: **\n\nContact me through this [thread](https://www.reddit.com/r/gameswap/comments/gbh2xf/usa\\_h\\_animal\\_crossing\\_amiibo\\_cards\\_series\\_14\\_w\\_ac/ \"https://www.reddit.com/r/gameswap/comments/gbh2xf/usa\\_h\\_animal\\_crossing\\_amiibo\\_cards\\_series\\_14\\_w\\_ac/\") EU paypal. \n\nBuyer covers all fees. Buyer pays first. If you buy multiple games I can lower the price (make an offer for multiple games, not lowball offers please). \n\n​\n\n**These are just suggestions to get you going - your free to do whatever (just try to be polite, responsible and respectful)**\n\n​\n\nCheers -** Simdi Jinkins**\n
`