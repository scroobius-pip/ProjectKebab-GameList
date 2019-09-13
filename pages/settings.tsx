
import SocialLoginButton from '../components/SocialLoginButton'
import Layout from '../components/Layout'
import { PremiumWithModal } from '../components/Modals'
import { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Section from '../components/Section'
import CheckBox from '../components/CheckBox'

export default () => {
    const [show, setShow] = useState(false)

    const open = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
    }


    return <Layout>
        <PremiumWithModal close={close} visible={show} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
            <span>
                <Button variant='outline-danger'>Cancel</Button>
            </span>
            <span style={{ marginLeft: 10 }}>
                <Button onClick={open}>Save</Button>
            </span>
        </div>
        <div style={{ marginBottom: 40 }} >
            <div><h6 style={{ marginLeft: 20, color: '#8B8B8B' }}>Profile Settings</h6></div>
            <div style={{ marginTop: 20 }}>
                <Section>


                    <Row>
                        <Col xs={12} md={10} >
                            <h6>Enable match notifications</h6>
                            <p style={{ maxWidth: 600, color: '#DCDCDC' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis itaque voluptate, quam nostrum et nisi assumenda nobis reiciendis cupiditate?</p>
                        </Col>
                        <Col xs={12} md={2} >
                            <div style={{ float: 'right' }}>
                                <CheckBox value='Hello' onChange={() => { }} />
                            </div>
                        </Col>
                    </Row>

                </Section>
            </div>
        </div>
        <div style={{ marginBottom: 40 }} >
            <div><h6 style={{ marginLeft: 20, color: '#8B8B8B' }}>Membership</h6></div>
            <div style={{ marginTop: 20 }}>
                <Section>


                    <Row>
                        <Col xs={12} md={10} >
                            <h6>Enable match notifications</h6>
                            <p style={{ maxWidth: 600, color: '#DCDCDC' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis </p>
                        </Col>
                        <Col xs={12} md={2} >
                            <div style={{ float: 'right' }}>
                                <CheckBox value='Hello' onChange={() => { }} />
                            </div>
                        </Col>
                    </Row>

                </Section>
            </div>
        </div>
    </Layout>
}