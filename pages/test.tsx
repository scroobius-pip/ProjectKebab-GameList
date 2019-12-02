import { getAuthToken, isExpired } from 'functions/utils/authToken';
import redirect from 'functions/utils/redirect';
import React from 'react';

import WithLayout from '@components/WithLayout';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import { colors } from '../styles'
import FeaturesSlider from '@components/FeaturesSection';
import LandingPageAnimation from '@components/LandingPageAnimation';
import { ScreenClassRender } from 'react-grid-system';

// export default class extends React.Component {
// static async getInitialProps(ctx) {
//     let authToken = getAuthToken(ctx)
//     if (isExpired(authToken)) {
//         redirect(ctx, '/login')
//         return
//     } else {
//         redirect(ctx, '/profile/me')
//     }
// }
// }




interface LandingSectionProps {
    title: string
    children: any
}

const SignUpButton = () => (
    <>
        <div className='button-container'>

            <Button className='custom-button' style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 2 }} block  >
                <span style={{ fontWeight: 600 }}> SIGN UP</span>
            </Button>
        </div>
        <style jsx>

            {`
            .button-container{
                width:100%;
               
            }
            @media only screen and (min-width: 768px){
                .button-container {
                    width:200px;
                }
            }

            `}
        </style>

    </>
)

const LandingSection = ({ title, children }: LandingSectionProps) => {
    return <div style={{ marginBottom: 40 }}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>{title}</h1>
        {children}
        <div>
            <div style={{
                display: 'flex', justifyContent: 'center'
            }}>
                <SignUpButton />
            </div>
        </div>
    </div>
}

interface LandingAccordionProps {
    heading: string
    body: string
    id: string
}

const LandingAccordion = ({ heading, body, id }: LandingAccordionProps) => {
    return <Card style={{ backgroundColor: colors.section, marginBottom: 10 }}>
        <Accordion.Toggle as={Card.Header} eventKey={id}>
            {heading}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={id}>
            <Card.Body style={{ backgroundColor: colors.background }}>{body}</Card.Body>
        </Accordion.Collapse>
    </Card>
}



const Page = () => {
    return <>
        {/* <div style={{ marginTop: '5vh', marginBottom: '5vh' }}>
            <LandingPageAnimation />
        </div> */}
        <div style={{ color: 'white', }}>

            <Row>
                <Col xs={{ span: 12, order: 12 }} md={{ span: 8, order: 1 }}>
                    <div>
                        <div>
                            <h1>List.</h1>
                            <h1>Match.</h1>
                            <h1>Trade Games.</h1>
                            <style jsx>
                                {`
                        h1{
                            font-size: 10vw;
                            font-weight: 700;        
                        }
                        @media only screen and (min-width:768px){
                            h1{
                                font-size:80px;
                            }
                        }
                        `}
                            </style>
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <p >

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt corporis minus perspiciatis repellat amet accusamus consectetur, vero saepe autem.
</p>

                            <style jsx>
                                {`
                        p{
                            font-size: 4vw;
                            max-width:100%;
                            color:#AEAEAE;
                        }
                        @media only screen and (min-width:768px){
                            p{
                                font-size:18px;
                                max-width:80%;
                                color:#AEAEAE;
                            }
                        }
                        `}
                            </style>
                        </div>
                    </div>
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={{ span: 12, order: 1 }} md={{ span: 4, order: 12 }}>
                    <ScreenClassRender
                        render={screenClass => {

                            switch (screenClass) {
                                case 'lg':
                                case 'xl':
                                    return <LandingPageAnimation itemSize={5} itemPadding={1} />

                                // case 'sm':
                                case 'md':
                                    return <LandingPageAnimation itemSize={4} itemPadding={1} />
                                default:
                                    return <LandingPageAnimation />
                            }


                            // return ['lg', 'md', 'xl'].includes(screenClass) ?
                            //     <LandingPageAnimation itemSize={5} itemPadding={1} /> :
                            //     <LandingPageAnimation />
                        }}
                    >

                    </ScreenClassRender>


                </Col>
            </Row>
            <div>
                <div>
                    <SignUpButton />
                </div>
                <div style={{ marginTop: 20 }}>
                    <div className='online_stat'>
                        <div className='online_stat_label'>Registered</div>
                        1,289
                        <style jsx>
                            {`
                            .online_stat{
                               font-size: 5vw;
                           
                            }
                            .online_stat_label {
                                font-weight: 600;
                                position:relative;
                                color:#AEAEAE;
                                text-transform: uppercase;
                                padding-left: 4vw;
                                font-size: 3vw;
                                letter-spacing:0.2vw;
                            }
                            .online_stat_label:before {
                                content:"";
                                width:2vw;
                                height:2vw;
                                border-radius: 50%;
                                position: absolute;
                                left:0;
                                top:1vw;
                                background-color:${colors.primary};
                            }
                            @media only screen and (min-width: 768px){
                                .online_stat{
                                    font-size:20px;
                                }
                                .online_stat_label{
                                    font-size:16px;
                                    padding-left: 20px;
                                    letter-spacing:initial;
                                }
                                .online_stat_label:before {
                                    width:10px;
                                    height:10px;
                                    top:8px;
                                }

                            }
                            `}
                        </style>
                    </div>
                </div>
            </div>
            <LandingSection title='Features'>

                <div style={{ marginBottom: 50 }}>
                    {/* for feature cards */}

                    <FeaturesSlider />
                </div>

            </LandingSection>
            <LandingSection title='Faq'>

                <div>
                    <Accordion defaultActiveKey="0">

                        <LandingAccordion
                            id='0'
                            heading='How would scammers be prevented from accessing the platform ?'
                            body='hello bodddy'
                        />
                        <LandingAccordion
                            id='1'
                            heading='How do you plan to prevent scamming ?'
                            body='hello body'
                        />

                    </Accordion>
                </div>
            </LandingSection>
            <LandingSection title='Roadmap'>

            </LandingSection>
        </div>

    </>
}


export default WithLayout(Page)