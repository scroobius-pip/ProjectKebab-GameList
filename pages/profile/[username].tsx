
import Section from '@components/Section';
import ReactMarkdown from 'react-markdown'
import { Col, Row, Alert, } from 'react-bootstrap'
import UserInfo from '@components/UserInfo';
import UserList, { UserGames } from '@components/UserList';

interface UserInfo {
    userName: string
    userImage: string
    isPremium: boolean
    epochTimeCreated: number
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
    if (query.username === 'me') {
        await stall()
        return {
            userInfo: {
                userName: 'simdi',
                userImage: "",
                isPremium: true,
                epochTimeCreated: 1504224000 * 1000,
                userDescription: ''
            },
            userGames: {
                has: [
                    {
                        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
                        consoleType: "Nintendo Switch",
                        description: "Lorem ipsum dolor sit amet.",
                        name: "Aead or Alive Xtreme 3: Scarlet",
                        tradeType: "Swap",
                        id: '1'
                    }
                    ,
                    {
                        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
                        consoleType: "Nintendo Switch",
                        description: "Lorem ipsum dolor sit amet.",
                        name: "Bead or Alive Xtreme 3: Scarlet",
                        tradeType: "Sale",
                        id: '2'
                    }
                    ,
                    {
                        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
                        consoleType: "Nintendo Switch",
                        description: "Lorem ipsum dolor sit amet.",
                        name: "Cead or Alive Xtreme 3: Scarlet",
                        tradeType: "Swap",
                        id: '3'
                    },
                    {
                        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
                        consoleType: "Nintendo Switch",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorum? Aspernatur, expedita!",
                        name: "Zead or Alive Xtreme 3: Scarlet",
                        tradeType: "Sale",
                        id: '4'
                    }
                ]
                ,
                want: []
            }
        }

    }
    return {
        userInfo: {
            userName: 'IncredibleGonzo',
            userImage: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
            isPremium: true,
            epochTimeCreated: 1504224000 * 1000,
            userDescription: ''
        },
        userGames: {
            has: [],
            want: []
        }
    }
}

export default Page