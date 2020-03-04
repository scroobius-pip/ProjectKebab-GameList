
import WithLayout from '@components/WithLayout';
import { Row, Col } from 'react-bootstrap';
import Section from '@components/Section';
import { withApollo } from 'functions/utils/apollo';

const Page = () => {

    // const ctx = router.
    return <>
        <Row>
            <Col lg={12}>
                <Section heading='About'>
                    <p>
                        I built this platform to build a community of gamers that trust each other to trade video games. "Nakama" means "Comrade" in japanese
                    </p>
                </Section>


            </Col>
            <Col lg={12}>

            </Col>

        </Row>
    </>
}


export default withApollo(WithLayout(Page))