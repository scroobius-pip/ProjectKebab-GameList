import Section from '../components/Section';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import Editor from '../components/Editor';
import UserList, { UserGames } from '../components/UserList';
import { withAuth } from '@components/WithAuth';
import { isEmpty } from 'lodash'
import { useState, useContext, useEffect } from 'react';
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
import { useRouter } from 'next/router';
import WithLayout from '@components/WithLayout';
import updateDescription from 'functions/graphql/mutations/updateDescription';


interface UserInfo {
    userName: string
    userImage: string
    isPremium: boolean
    epochTimeCreated: number
    userDescription: string
    isBanned: boolean
}

const sendOperations = (status: IUserGameDetailsStatus, client: ApolloClient<any>) => async (operations: { [id: string]: Operation<OnChangeDataUserList> }, ) => {
    const addOperations: UserGame[] = []
    const updateOperations: UserGame[] = []
    const deleteOperations: Array<{ id: string }> = []
    console.log(operations)
    for (const id in operations) {
        if (operations[id].add) {
            addOperations.push(operations[id].add.value)
            continue
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
    return resultAdd.success && resultDelete.success && resultUpdate.success
}


interface Props {
    description: string
    userGames: UserGames
}

const Page = ({ description, userGames: initialUserGames }: Props) => {

    const [hasGameOperations, setHasGameOperations] = useState<{ [id: string]: Operation<OnChangeDataUserList> }>({})
    const [wantGameOperations, setWantGameOperations] = useState<{ [id: string]: Operation<OnChangeDataUserList> }>({})
    const [changedDescription, setDescription] = useState('')


    const [saving, setSaving] = useState(false)
    const router = useRouter()
    const apolloClient = useContext(getApolloContext()).client
    const Router = useRouter()
    const hasSendOperations = sendOperations(IUserGameDetailsStatus.Has, apolloClient)
    const wantSendOperations = sendOperations(IUserGameDetailsStatus.Want, apolloClient)


    const isSaved = isEmpty(hasGameOperations) && isEmpty(wantGameOperations) && !changedDescription.length;

    const handleRouteChange = async () => {
        console.log('started routing')

        await saveOperations()
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
                        <Button onClick={() => Router.push('/profile/me')} variant='outline-primary'>View List</Button>
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
        description: data.info.description || ''
    }
}

export default withApollo(withAuth(WithLayout(Page)))

