import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import Section from '../components/Section';
import ReactMarkdown from 'react-markdown'
import { Container, Col, Row, } from 'react-bootstrap'
import UserInfo from '../components/UserInfo';
import UserList from '../components/UserList';
import NavBar from '../components/NavBar';

const userInfo = {
    userName: 'IncredibleGonzo',
    userImage: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
    isPremium: true,
    epochTimeCreated: 1504224000 * 1000
}

export default () => {
    return (
        <Container>
            <NavBar {...userInfo} />
            <Row >
                <Col sm={12} md={3}>
                    <Section>
                        <UserInfo {...userInfo} />
                    </Section>
                </Col>
                <Col sm={12} md={9}>
                    <Row>
                        <Col sm={12} >
                            <Section heading='Details.'>
                                <ReactMarkdown source={'It aims to be [CommonMark](http:\/\/commonmark.org\/) compliant, and includes options to style the output. These options include:\r\n\r\n*   headingStyle (setext or atx)\r\n*   horizontalRule (\\*, -, or \\_)\r\n*   bullet (\\*, -, or +)\r\n*   codeBlockStyle (indented or fenced)\r\n*   fence (\\` or ~)\r\n*   emDelimiter (\\_ or \\*)\r\n*   strongDelimiter (\\*\\* or \\_\\_)\r\n*   linkStyle (inlined or referenced)\r\n*   linkReferenceStyle (full, collapsed, or shortcut)'} />
                            </Section></Col>
                        <Col sm={12} >
                            <Section heading={`${userInfo.userName}'s List.`}>
                                <UserList />

                            </Section>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}