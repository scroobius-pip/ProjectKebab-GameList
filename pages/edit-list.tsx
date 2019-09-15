import Layout from '../components/Layout';
import Section from '../components/Section';
import { Row, Col } from 'react-bootstrap';
import Editor from '../components/Editor';
import UserList from '../components/UserList';


export default () => {
    return <Layout>
        <Row>
            <Col md={12} style={{ marginBottom: 30 }}>
                <Section heading='Description.'>
                    <Editor initialContent='' />
                </Section>

            </Col>
            <Col md={12}>
                <Section heading='Your List.'>
                    <UserList  />
                </Section>
            </Col>
        </Row>
    </Layout >
}