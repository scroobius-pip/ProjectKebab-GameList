import Layout from '../components/Layout';
import Section from '../components/Section';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import Editor from '../components/Editor';
import UserList, { UserGames } from '../components/UserList';
import { getAuthToken } from 'functions/utils/authToken';
import { withAuth } from '@components/WithAuth';
import { colors } from '../styles'
import { unionBy } from 'lodash'
import { useState } from 'react';
import mergeOperations, { Operation } from 'functions/utils/mergeOperation';
import mergeOperation from 'functions/utils/mergeOperation';

interface UserInfo {
    userName: string
    userImage: string
    isPremium: boolean
    epochTimeCreated: number
    userDescription: string
    isBanned: boolean
}

const Page = ({ userInfo, userGames, authToken }: { userInfo: UserInfo, userGames: UserGames, authToken: string }) => {
    // console.log(`auth token: ${authToken}`)
    const [gameOperations, setGameOperations] = useState<{ [id: string]: Operation }>({})

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

            </div>

        </div>
        <Row>
            <Col md={12} style={{ marginBottom: 30 }}>
                <Section heading='Description.'>
                    <Editor initialContent={userInfo.userDescription} />
                </Section>

            </Col>
            <Col md={12}>
                <Section heading='Your List.'>
                    <UserList
                        onChange={(changeType, data) => {
                            setGameOperations({
                                ...gameOperations,
                                [data.id]: mergeOperation(
                                    {
                                        ...(gameOperations[data.id] || {}),
                                        [changeType]: data,
                                    }
                                )
                            })

                            console.log(mergeOperations(gameOperations))
                        }}
                        data={userGames} editable />
                </Section>
            </Col>
        </Row>
    </>
}


Page.getInitialProps = async ({ ctx }) => {
    // console.log(getAuthToken(ctx))


    return {
        userInfo: {
            userName: 'simdi',
            userImage: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
            isPremium: true,
            epochTimeCreated: 1504224000 * 1000,
            userDescription: 'It aims to be [CommonMark](http:\/\/commonmark.org\/) compliant, and includes options to style the output. These options include:\r\n\r\n*   headingStyle (setext or atx)\r\n*   horizontalRule (\\*, -, or \\_)\r\n*   bullet (\\*, -, or +)\r\n*   codeBlockStyle (indented or fenced)\r\n*   fence (\\` or ~)\r\n*   emDelimiter (\\_ or \\*)\r\n*   strongDelimiter (\\*\\* or \\_\\_)\r\n*   linkStyle (inlined or referenced)\r\n*   linkReferenceStyle (full, collapsed, or shortcut)',
            isBanned: false
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

export default withAuth(Page)