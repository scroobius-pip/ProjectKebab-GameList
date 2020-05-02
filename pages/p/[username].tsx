
import Section from '@components/Section';
import ReactMarkdown from 'react-markdown'
import { Col, Row, Alert, } from 'react-bootstrap'
import UserInfo from '@components/UserInfo';
import UserList, { UserGames } from '@components/UserList';
import { withAuth } from '@components/WithAuth';
import { withApollo } from 'functions/utils/apollo';
import WithLayout from '@components/WithLayout';
import getUserFromUsername from 'functions/graphql/queries/getUserFromUsername';
import mapToUserGame from 'graphql/utils/mapToUserGame';
import { UserInfo as IUserInfo } from 'types/IUser';
import Head from 'next/head';

// interface IUserInfo {
//     userName: string
//     userImage: string
//     isPremium: boolean
//     epochTimeCreated: string
//     userDescription: string
//     isBanned: boolean
//     location: {
//         state: string
//         country: string
//     }
// }

async function stall(stallTime = 500) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}



const Page = ({ userInfo, userGames }: { userInfo: IUserInfo, userGames: UserGames }) => {

    return (
        <>
            <Head>
                <title> {`${userInfo.userName}'s Trade List`}</title>
            </Head>
            <Row >
                <Col md={12} lg={3} style={{ marginBottom: 30 }}>
                    <Section>
                        <UserInfo {...userInfo} />
                    </Section>
                </Col>
                <Col md={12} lg={9}>
                    <Row noGutters={false}>
                        <Col lg={12} style={{ marginBottom: 30 }} >
                            <Section heading='Details.'>

                                <ReactMarkdown source={userInfo.description} />
                            </Section>
                        </Col>
                        <Col lg={12}  >
                            <Section heading={`${userInfo.userName}'s List.`}>
                                <UserList data={userGames} />
                            </Section>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </>
    )
}

Page.getInitialProps = async ({ apolloClient, query: { username = '' } }) => {
    const user = await getUserFromUsername(apolloClient, username)
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

    const userInfo: IUserInfo = {
        isBanned,
        userName: userName || email,
        // userDescription: userDescription || '',
        description: description || `${userName || email} hasn't provided details`,
        userImageUrl,
        email,
        isPro,
        epochTimeCreated,
        location
    }
    return {
        userInfo,
        userGames: {
            has: user.hasGames.map(mapToUserGame()),
            want: user.wantedGames.map(mapToUserGame()),

        } as UserGames
    }

}

export default withApollo(WithLayout(Page))