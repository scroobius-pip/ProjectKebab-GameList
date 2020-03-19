
import WithLayout from '@components/WithLayout';
import { Row, Col } from 'react-bootstrap';
import Section from '@components/Section';
import { withApollo } from 'functions/utils/apollo';

const Page = () => {

    // const ctx = router.
    return <>
        <Row>
            <Col lg={12}>
                <Section heading='Privacy Policy'>
                    {/* <h3>Boring Legal Stuff Here</h3> */}
                    <h5></h5>
                    <p>Rade uses cookies to store authentication information, if you disable cookies this site might not function properly</p>
                    <p>There's simply no information being stored on the rade database that can be used to link to your real life self</p>
                    <p>Rade stores your location to facilitate location matching, it doesn't constantly track you, but only uses your coordinates at time of activation.</p>
                    <h3>3rd parties</h3>
                    <p>Google analytics and hotjar is being used to track site traffic</p>

                </Section>


            </Col>


        </Row>
    </>
}


export default withApollo(WithLayout(Page))