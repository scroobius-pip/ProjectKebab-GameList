
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
                        Hi i'm simdi, i built this platform because there weren't ways of finding trading partners where i live. What i want is a global trading community of gamers, everyone on it could be trusted as one would a friend (this might seem rather idealistic, but it's worth giving a shot).
                    </p>
                    <p>
                        It's decentralized because i believe your games/items value should depend on you and not by resellers that might devalue excessively to maximize profit.
                    </p>
                    <p>

                        The current version of rade is meant to be used in two ways: <br />
                        <ol>
                            <li>
                                To list your games for other gamers to find. Your rade profile should be linked in reddit posts, steam groups and other online communities.
                            </li>
                            <li>
                                To get matched with gamers interested in what you want and have.
                            </li>
                        </ol>

                        Actual trades would be done in future iterations of the platform, but i feel it should be done without having to collect private info.
</p>
                    <p style={{ float: 'right' }}>I hope you find what i've created useful, cheers!<br />
                    - <b>Simdi Jinkins</b>.
                    </p>
                </Section>


            </Col>
            <Col lg={12}>

            </Col>

        </Row>
    </>
}


export default withApollo(WithLayout(Page))