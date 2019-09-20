
import Section from '@components/Section';
import ReactMarkdown from 'react-markdown'
import { Col, Row, } from 'react-bootstrap'
import UserInfo from '@components/UserInfo';
import UserList from '@components/UserList';

interface UserInfo {
    userName: string;
    userImage: string;
    isPremium: boolean;
    epochTimeCreated: number;
}

async function stall(stallTime = 500) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}



const Page = ({ userInfo }: { userInfo: UserInfo }) => {

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
                                <ReactMarkdown source={'It aims to be [CommonMark](http:\/\/commonmark.org\/) compliant, and includes options to style the output. These options include:\r\n\r\n*   headingStyle (setext or atx)\r\n*   horizontalRule (\\*, -, or \\_)\r\n*   bullet (\\*, -, or +)\r\n*   codeBlockStyle (indented or fenced)\r\n*   fence (\\` or ~)\r\n*   emDelimiter (\\_ or \\*)\r\n*   strongDelimiter (\\*\\* or \\_\\_)\r\n*   linkStyle (inlined or referenced)\r\n*   linkReferenceStyle (full, collapsed, or shortcut)'} />
                            </Section>
                        </Col>
                        <Col lg={12}  >
                            <Section heading={`${userInfo.userName}'s List.`}>
                                <UserList />
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
                userImage: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
                isPremium: true,
                epochTimeCreated: 1504224000 * 1000
            }
        }

    }
    return {
        userInfo: {
            userName: 'IncredibleGonzo',
            userImage: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
            isPremium: true,
            epochTimeCreated: 1504224000 * 1000
        }
    }
}

export default Page