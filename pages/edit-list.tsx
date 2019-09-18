import Layout from '../components/Layout';
import Section from '../components/Section';
import { Row, Col, Button } from 'react-bootstrap';
import Editor from '../components/Editor';
import UserList from '../components/UserList';


export default () => {




    return <Layout>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
            <span>
                <Button variant='outline-danger'>Cancel</Button>
            </span>
            <span style={{ marginLeft: 10 }}>
                <Button onClick={() => { }}>Save</Button>
            </span>
        </div>
        <Row>
            <Col md={12} style={{ marginBottom: 30 }}>
                <Section heading='Description.'>
                    <Editor initialContent='' />
                </Section>

            </Col>
            <Col md={12}>
                <Section heading='Your List.'>
                    <UserList variant='Card' editable />
                </Section>
            </Col>
        </Row>
    </Layout >
}