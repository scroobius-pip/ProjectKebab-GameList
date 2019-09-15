import Layout from '../components/Layout';
import Section from '../components/Section';
import { Row, Col } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './gamelist.css'

export default () => {
    return <Layout>
        <Row>
            <Col md={12} style={{ marginBottom: 30 }}>
                <Section heading='Description.'>
                    <Editor toolbar={
                        {
                            options: ['inline', 'list'],
                            inline: {
                                options: ['bold', 'italic', 'underline', 'strikethrough',]
                            },
                            list: {
                                options: ['unordered', 'ordered']
                            }
                        }
                    }
                        editorStyle={{
                            backgroundColor: '#3D3F42',
                            borderRadius: 5,
                            padding: '5px 10px 5px 10px',
                            color: '#EAEBEB',
                            // marginLeft: -20,
                            // marginRight: -20,
                            // fontSize: 10
                        }}

                        toolbarStyle={{
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            padding: 0,
                            marginBottom: 10
                        }}
                    />


                </Section>

            </Col>
            <Col md={12}>
                <Section heading='Your List.'>
                    <p>hello</p>
                </Section>
            </Col>
        </Row>
    </Layout >
}