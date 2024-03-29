import React, { useContext, useState, useEffect } from 'react';

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
import Head from 'next/head'
import { getApolloContext } from 'react-apollo';

interface LandingSectionProps {
    title: string
    children: any
    description?: string
    height?: string
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



const LandingSection = ({ title, children, description, height }: LandingSectionProps) => {
    return <div id={title} style={{ marginBottom: 40, height: height ? height : '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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


const Page = ({ signIn }) => {

    const router = useRouter()
    const apolloClient = useContext(getApolloContext()).client
    const [userCount, setUserCount] = useState(0)

    useEffect(() => {
        getUserCount(apolloClient).then(value => {
            setUserCount(value)
        })
    }, [])
    const SignInButton = () => {
        return <div>
            <UserConsumer>
                {
                    (user) => <PrimaryButton text={user ? 'PROFILE' : 'Create Your Trading List'} onClick={user ? () => router.push('/p/me') : signIn} />
                }
            </UserConsumer>
        </div>
    }
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
                                <p >
                                    1. Create and share your trading list. <br />
                                    2. Get matched automatically with other traders. <br />
                                    3. Sell or swap your digital codes and physical games.
                                </p>
                                <p style={{ color: 'white', fontWeight: 600 }}>Rade is making trading digital or physical games safer and easier.</p>
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
                    <SignInButton />
                    <div style={{ marginTop: 20 }}>
                        <RegisteredStat userCount={userCount} />
                    </div>
                </div>
                <SectionLink name='FEATURES' href='#Features' />

            </div>
            <LandingSection description='Current and Coming Soon Features' title='Features'>
                <div style={{ position: 'relative', height: '100%', }}>
                    <FeaturesSection />

                    {/* <SectionLink name='ROADMAP' href='#Roadmap' /> */}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

                    <SignInButton />
                </div>
            </LandingSection>
            {/* <LandingSection title='Faq'>
                <FaqSection />
            </LandingSection> */}

            {/* <LandingSection description={''} title='Roadmap' height='initial'>
                <div style={{ height: '90%', alignSelf: 'center', textAlign: 'center', maxWidth: 800, color: '#AEAEAE', fontSize: 18, marginTop: 20 }}>
                    <p style={{ color: 'white' }}>
                        <b >Stage 1:</b> Trade Listing Functionality and Matching
                    </p>
                    <p style={{ marginTop: 20 }}>
                        <b>Stage 2:</b> Switch over to invite only membership - you would be able to invite people you trust.
                    </p>
                    <p style={{ marginTop: 20 }}>
                        <b>Stage 3:</b> Chat and offers functionality. Trade Insurance - if a trade doesn't work out you get refunded.
                    </p>
                  
                </div>

            </LandingSection> */}
        </div>

    </>
}


// Page.getInitialProps = async ({ apolloClient }) => {
//     try {
//         // const userCount = await getUserCount(apolloClient)
//         return { userCount: 0 }
//     } catch (error) {
//         return { userCount: 0 }
//     }
// }


export default withApollo(WithLayout(Page))
