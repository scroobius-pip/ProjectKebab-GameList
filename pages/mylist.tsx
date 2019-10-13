import Section from '../components/Section';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import Editor from '../components/Editor';
import UserList, { UserGames } from '../components/UserList';
import { withAuth } from '@components/WithAuth';
import { colors } from '../styles'
import { unionBy, values, isEmpty } from 'lodash'
import { useState, useContext } from 'react';
import mergeOperation, { Operation } from 'functions/utils/mergeOperation';
// import mergeOperation from 'functions/utils/mergeOperation';
import { UserGameComponent, GetDescriptionComponent, IUserGameDetailsStatus } from 'generated/apolloComponents';
import mapToUserGame from 'graphql/utils/mapToUserGame';
import { OnChangeDataUserList } from '@components/UserList/UserList.Table';
import { UserGame } from '@components/UserList/UserList';
import addGames from 'functions/graphql/mutations/addGames';
import { ApolloClient } from 'apollo-boost';
import { getApolloContext } from 'react-apollo';
import useInterval from "@rooks/use-interval"
import removeGames from 'functions/graphql/mutations/removeGames';
import updateGames from 'functions/graphql/mutations/updateGames';


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
    // return false
}


const Page = () => {

    const [hasGameOperations, setHasGameOperations] = useState<{ [id: string]: Operation<OnChangeDataUserList> }>({})
    const [wantGameOperations, setWantGameOperations] = useState<{ [id: string]: Operation<OnChangeDataUserList> }>({})
    const [saving, setSaving] = useState(false)
    const apolloClient = useContext(getApolloContext()).client

    const hasSendOperations = sendOperations(IUserGameDetailsStatus.Has, apolloClient)
    const wantSendOperations = sendOperations(IUserGameDetailsStatus.Want, apolloClient)

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

        console.log(mergeOperation(wantGameOperations));
    }


    const saveOperations = async () => {
        console.log('sending')
        setSaving(true)

        const hasResult = await hasSendOperations(hasGameOperations)
        const wantResult = await wantSendOperations(wantGameOperations)
        console.log(`${hasResult} hasresult`)
        if (hasResult) {
            setHasGameOperations({})
        }
        if (wantResult) {
            setWantGameOperations({})
        }

        setSaving(false)

    }

    useInterval(() => {
        saveOperations()
    }, !isEmpty(hasGameOperations) ? 5000 : null, true)


    return <>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 20, flexDirection: 'column' }}>
            <div>
                <span>
                    <Button variant='outline-primary'>View List</Button>
                </span>
            </div>
            <div
                style={{ marginTop: 20 }}
            >
                {
                    saving ?
                        <>
                            <Spinner
                                variant='light'
                                style={{
                                    width: '1em',
                                    height: '1em',
                                }}
                                animation="grow" />
                            <span style={{ color: colors.text, fontWeight: 600, marginLeft: 5 }}>
                                Saving
                            </span>
                        </> : isEmpty(hasGameOperations) ?
                            <span style={{ color: colors.secondary, fontWeight: 600, marginLeft: 5 }}>
                                Saved
                        </span> :
                            <span style={{ color: 'red', fontWeight: 600, marginLeft: 5 }}>
                                Not Saved
                            </span>

                }
            </div>

        </div>
        <Row>
            <Col md={12} style={{ marginBottom: 30 }}>
                <Section heading='Description.'>
                    <GetDescriptionComponent>
                        {
                            ({ data, loading }) =>
                                loading ? <p>...loading</p> : <Editor initialContent={data.me.info.description} />
                        }
                    </GetDescriptionComponent>
                </Section>

            </Col>
            <Col md={12}>
                <Section heading='Your List.'>
                    <UserGameComponent>

                        {({ data, loading }) => {

                            if (loading) return <p>...Loading</p>
                            // console.log(props)
                            const userGames: UserGames = {
                                has: data.me.hasGames.map(mapToUserGame()),
                                want: data.me.wantedGames.map(mapToUserGame()),

                            }

                            return <UserList
                                onHasChange={handleHasChange}
                                onWantChange={handleWantChange}
                                data={userGames} editable />
                        }}
                    </UserGameComponent>
                </Section>
            </Col>
        </Row>
    </>
}



export default withAuth(Page)

