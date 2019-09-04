import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import Button from '../components/Button';
import Section from '../components/Section';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
    return (
        <Container fluid>
            <Row >
                <Col style={{ backgroundColor: 'white', padding: 20 }} sm={12} md={4}>Hello</Col>
                <Col sm={12} md={8}>
                    <Row>
                        <Col style={{ backgroundColor: 'blue', padding: 20 }} sm={12} >Hello</Col>
                        <Col style={{ backgroundColor: 'orange', padding: 20 }} sm={12} >Hello</Col>
                    </Row>

                </Col>


            </Row>
        </Container>
    )
}