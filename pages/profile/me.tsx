
import Section from '@components/Section';
import ReactMarkdown from 'react-markdown'
import { Col, Row, Alert, Button, } from 'react-bootstrap'
import UserInfo from '@components/UserInfo';
import UserList, { UserGames } from '@components/UserList';
import { withAuth } from '@components/WithAuth';
import Router from 'next/router'
import WithLayout from '@components/WithLayout';
import { withApollo } from 'functions/utils/apollo';
import getUserInfo from 'functions/graphql/queries/getUserInfo';
import getMyGamesAndDescription from 'functions/graphql/queries/getMyGamesAndDescription';
import mapToUserGame from 'graphql/utils/mapToUserGame';
import { UserInfo as IUserInfo } from 'types/IUser';
import Head from 'next/head';




async function stall(stallTime = 500) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}



const Page = ({ userInfo, userGames }: { userInfo: IUserInfo, userGames: UserGames }) => {

    return (
        <>
            <Head>
                <title> {`${userInfo.userName}'s Trade List`}</title>
            </Head>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
                <span>
                    <Button onClick={() => Router.push('/mylist')} variant='outline-primary'>Edit List</Button>
                </span>

            </div>
            <Row >
                <Col md={12} lg={3} style={{ marginBottom: 30 }}>
                    <Section>
                        <UserInfo disableChat {...userInfo} />
                    </Section>
                </Col>
                <Col md={12} lg={9}>
                    <Row noGutters={false}>
                        <Col lg={12} style={{ marginBottom: 30 }} >
                            <Section heading='Details.'>
                                {
                                    userInfo.description.length ?
                                        <ReactMarkdown source={userInfo.description} /> :
                                        <Alert variant='info'>{userInfo.userName} hasn't provided any details</Alert>
                                }
                            </Section>
                        </Col>
                        <Col lg={12}  >
                            <Section heading={`${userInfo.userName}'s List.`}>
                                <UserList data={userGames} />
                            </Section>
                        </Col>
                    </Row>

                </Col >
            </Row >
        </>
    )
}

Page.getInitialProps = async ({ apolloClient }) => {

    const user = await getUserInfo(apolloClient)

    const gamesAndDescription = await getMyGamesAndDescription(apolloClient)

    const {
        description = '',
        userName,
        userImageUrl = '',
        isPro,
        epochTimeCreated,
        isBanned,
        email,
        location
    } = user.info

    // const resultsGamesAndDescription = 
    const userInfo: IUserInfo = {
        isBanned,
        userName: userName || email,
        description: description || "You haven't provided any details",
        userImageUrl,
        isPro,
        epochTimeCreated,
        location
    }
    // console.log(userInfo)
    return {
        userInfo,
        userGames: {
            has: gamesAndDescription.hasGames.map(mapToUserGame()),
            want: gamesAndDescription.wantedGames.map(mapToUserGame()),

        } as UserGames
    }


}

export default withApollo(withAuth(WithLayout(Page)))