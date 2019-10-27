
import Section from '@components/Section';
import ReactMarkdown from 'react-markdown'
import { Col, Row, Alert, } from 'react-bootstrap'
import UserInfo from '@components/UserInfo';
import UserList, { UserGames } from '@components/UserList';
import { withAuth } from '@components/WithAuth';
import { withApollo } from 'functions/utils/apollo';
import WithLayout from '@components/WithLayout';

interface UserInfo {
    userName: string
    userImage: string
    isPremium: boolean
    epochTimeCreated: string
    userDescription: string
    isBanned: boolean
}

async function stall(stallTime = 500) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}



const Page = ({ userInfo, userGames }: { userInfo: UserInfo, userGames: UserGames }) => {

    return (
        <>
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
                                {
                                    userInfo.userDescription.length ?
                                        <ReactMarkdown source={userInfo.userDescription} /> :
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

                </Col>
            </Row>
        </>
    )
}

Page.getInitialProps = async ({ query }) => {

    return {
        userInfo: {
            userName: 'IncredibleGonzo',
            userImage: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
            isPremium: true,
            epochTimeCreated: (1504224000 * 1000).toString(),
            userDescription: "I've got a few hardware too:\n\n1. A broken xbox one with 3 __controllers__\n2. 2 playstation 1 controllers\n3. 1 camo themed playstation 4 controller"
        },
        userGames: {
            has: [],
            want: []
        }
    }
}

export default withApollo(WithLayout(Page))