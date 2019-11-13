
import WithLayout from '@components/WithLayout';
import { Row, Col } from 'react-bootstrap';
import Section from '@components/Section';

const Page = () => {

    // const ctx = router.
    return <>
        <Row>
            <Col lg={12}>
                <Section heading='Privacy Policy'>
                    <p>
                        Work in progress, rest assured the only data collected is used for tracking website traffic stats. We don't give data to any 3rd parties
                    </p>
                </Section>


            </Col>
            <Col lg={12}>

            </Col>

        </Row>
    </>
}


export default WithLayout(Page)