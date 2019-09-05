import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import Section from '../components/Section';
import ReactMarkdown from 'react-markdown'
import ProfileImage from '../components/ProfileImage.Status';
import { Container, Col, Row, } from 'react-bootstrap'
import UserInfoStatus from '../components/UserInfo.Status';

export default () => {
    return (

        <Container fluid>
            <Row >
                <Col sm={12} md={4}>
                    <Section>
                        <UserInfoStatus />
                    </Section>
                </Col>
                <Col sm={12} md={8}>
                    <Row>
                        <Col sm={12} ><Section heading='Details.'>
                            <ReactMarkdown source={'It aims to be [CommonMark](http:\/\/commonmark.org\/) compliant, and includes options to style the output. These options include:\r\n\r\n*   headingStyle (setext or atx)\r\n*   horizontalRule (\\*, -, or \\_)\r\n*   bullet (\\*, -, or +)\r\n*   codeBlockStyle (indented or fenced)\r\n*   fence (\\` or ~)\r\n*   emDelimiter (\\_ or \\*)\r\n*   strongDelimiter (\\*\\* or \\_\\_)\r\n*   linkStyle (inlined or referenced)\r\n*   linkReferenceStyle (full, collapsed, or shortcut)'} />
                        </Section></Col>
                        <Col style={{ backgroundColor: 'orange' }} sm={12} >Hello</Col>
                    </Row>

                </Col>


            </Row>
        </Container>


    )
}