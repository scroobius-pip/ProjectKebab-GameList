
import WithLayout from '@components/WithLayout';
import { Row, Col } from 'react-bootstrap';
import Section from '@components/Section';
import { withApollo } from 'functions/utils/apollo';

const Page = () => {

    // const ctx = router.
    return <>
        <Row>
            <Col lg={12}>
                <Section heading='Terms & Conditions'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eius sed ipsum magni eligendi adipisci! Velit deleniti ipsum nemo qui, amet magnam vitae soluta omnis. Explicabo iure quaerat natus voluptatum, in impedit excepturi incidunt similique voluptas dolore aut quam ducimus consequuntur minima dolorum unde mollitia facilis asperiores nemo deserunt eum veritatis quos. Error ad repudiandae amet omnis fugit esse tempore suscipit voluptatum? Velit exercitationem officiis quis molestiae cupiditate iusto quas labore modi, natus non quaerat tempora molestias numquam. Aut mollitia nisi et necessitatibus illo iste laudantium, quas nihil tempore ipsam error aliquam maiores quam, quisquam, beatae quos accusamus at quod.
        </p>
                </Section>


            </Col>
            <Col lg={12}>

            </Col>

        </Row>
    </>
}


export default withApollo(WithLayout(Page))