import React from 'react';

import WithLayout from '@components/WithLayout';
import { Row, Col, Button } from 'react-bootstrap';
import { colors } from '../styles'
import FeaturesSection from '@components/FeaturesSection';
import LandingPageAnimation from '@components/LandingPageAnimation';
import { ScreenClassRender } from 'react-grid-system';
import { withApollo } from 'functions/utils/apollo';
import getUserCount from 'functions/graphql/queries/getUserCount';
import { UserConsumer } from 'context/UserContext';
import { useRouter } from 'next/router';


interface LandingSectionProps {
    title: string
    children: any
    description?: string
}

const SectionLink = ({ name, href }) => {
    return <div className='section-link' style={{ textAlign: 'center', position: 'absolute', bottom: '10vh', left: 0, right: 0, fontSize: 18 }}>

        <span style={{ display: 'block' }}><a href={href} style={{ color: 'white', fontWeight: 600, textDecoration: 'none', letterSpacing: 1, }}>
            {name}
        </a></span>
        <span>
            <img width={'10em'} src={require('../assets/icons/down-arrow.svg')} />
        </span>
        <style jsx>
            {`
.section-link {
opacity: 0.5;
transition: opacity 200ms ease;
}
.section-link:hover {
opacity:1;
}
`}
        </style>
    </div>
}

const PrimaryButton = ({ onClick, text = '' }) => (
    <>
        <div className='button-container'>

            <Button onClick={onClick} className='custom-button' style={{
                padding: 10,
                backgroundColor: colors.primary,
                borderRadius: 2,
                borderColor: colors.primary
            }} block  >
                <span style={{ fontWeight: 600 }}> {text}</span>
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



const LandingSection = ({ title, children, description }: LandingSectionProps) => {
    return <div id={title} style={{ marginBottom: 40, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bolder', }}>{title}</h1>
        {description && <h5 style={{ textAlign: 'center', marginBottom: '5vh', fontWeight: 'normal', }}>
            {description}
        </h5>}
        {children}
        <div>
            <div style={{
                display: 'flex', 
                justifyContent: 'center'
            }}>
                {/* <SignUpButton /> */}
            </div>
        </div>

    </div>
}

const RegisteredStat = ({ userCount }: { userCount: number }) => {
    if (!userCount || userCount < 100) return null
    return (
        <div className='online_stat'>
            <div className='online_stat_label'>Registered</div>
            {userCount}
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
    )
}


const Page = ({ signIn, userCount = 100 }) => {

    const router = useRouter()

    return <>
        <div style={{ color: 'white', }}>

            <div style={{ height: '90vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>


                <Row>
                    <Col xs={{ span: 12, order: 12 }} md={{ span: 12, order: 12 }} lg={{ span: 8, order: 1 }}>
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
                                {/* <p >
                                    And get matched with other gamers.<br />
                                    To sell or swap your physical or digital games.
                            </p>  Create your game list. <br /> */}
                                <p>
                                    1. Create and share your game list. <br />
                                    2. Get matched with other gamers around the world. <br />
                                    3. Sell or swap your digital and physical games.
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
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '5vh' }} md={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} lg={{ span: 4, order: 12 }}>
                        <ScreenClassRender
                            render={screenClass => {

                                switch (screenClass) {
                                    case 'lg':
                                    case 'xl':
                                        return <LandingPageAnimation itemSize={5} itemPadding={1} />
                                    case 'md':
                                        return <LandingPageAnimation itemSize={10} itemPadding={1} />
                                    default:
                                        return <LandingPageAnimation />
                                }
                            }}
                        >

                        </ScreenClassRender>


                    </Col>
                </Row>
                <div>
                    <div>
                        <UserConsumer>
                            {
                                (user) => <PrimaryButton text={user ? 'PROFILE' : 'SIGN UP'} onClick={user ? () => router.push('/profile/me') : signIn} />
                            }
                        </UserConsumer>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <RegisteredStat userCount={userCount} />
                    </div>
                </div>
                <SectionLink name='FEATURES' href='#Features' />

            </div>
            <LandingSection description='Current and Coming Soon Features' title='Features'>
                <div style={{ position: 'relative', height: '90%', }}>
                    <FeaturesSection />
                    <SectionLink name='ROADMAP' href='#Roadmap' />
                </div>
            </LandingSection>
            {/* <LandingSection title='Faq'>
                <FaqSection />
            </LandingSection> */}

            <LandingSection description={''} title='Roadmap'>
                <div style={{ height: '90%', alignSelf: 'center', textAlign: 'center', maxWidth: 800, color: '#AEAEAE', fontSize: 18 }}>
                    <p style={{ color: 'white' }}>
                        <b >Stage 1:</b> Allow reddit and steam users to register, the platform is used only for listing games and matching users, trades aren't done on the platform but through current channels like r/gameswap.
                    </p>
                    <p style={{ marginTop: 40 }}>
                        <b>Stage 2:</b> Switch over to invite only membership, allow invited members to register with an email and password. Actual trading is still not done on the platform.
                    </p>
                    <p style={{ marginTop: 40 }}>
                        <b>Stage 3:</b> New features !!! users are able to chat, make offers and trade on the platform.
                    </p>
                    {/* <p>
                        <b>Stage 4</b> Partnership with steam ? to allow secure trading of games. Swap meets ?. In game currency ?
                    </p> */}
                </div>

            </LandingSection>
        </div>

    </>
}


Page.getInitialProps = async ({ apolloClient }) => {

    const userCount = await getUserCount(apolloClient)
    return { userCount }
}


export default withApollo(WithLayout(Page))