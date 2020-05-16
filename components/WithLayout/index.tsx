// import 'bootstrap/dist/css/bootstrap.min.css'
import './bootstrap.min.css'
import './index.css'

import { Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import { ScreenClassProvider } from 'react-grid-system';
import { UserProvider } from 'context/UserContext';
import React, { } from 'react';
import getUserInfo from 'functions/graphql/queries/getUserInfo';
import { LoginWithModal, PremiumWithModal } from '@components/Modals';
import PageLoader from '@components/PageLoader'
import { setAuthToken } from 'functions/utils/authTokenCookie';
import redirect from 'functions/utils/redirect';
import User from 'types/IUser';
import Head from 'next/head';
import { colors } from 'styles';
import Footer from '@components/Footer/Footer';
import MetaTags from '@components/MetaTags';


interface Props {

    Component: any
    user: User
    apolloClient: any
}

interface State {
    premiumVisible: boolean
    signInVisible: boolean
}

const Layout = (Component: any) => {

    return class LayoutComponent extends React.Component<Props, State> {

        static async getInitialProps({ ...ctx }) {
            const user = await getUserInfo(ctx.apolloClient)
            // const user = null
            // console.log(user)
            return { user, ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}) }
        }


        constructor(props) {
            super(props)

            this.state = {
                premiumVisible: false,
                signInVisible: false,

            }
            this.togglePremiumModal = this.togglePremiumModal.bind(this)
            this.toggleSignInModal = this.toggleSignInModal.bind(this)
        }



        togglePremiumModal = (value = true) => {
            this.setState({
                premiumVisible: value,
            })
        }

        toggleSignInModal = (value = true) => {
            this.setState({
                signInVisible: value,
            })
        }




        signIn = async (token: string) => {

            if (typeof token === 'string' && token) {
                // setUser(await getUserInfo(apolloClient))
                setAuthToken(token)
                redirect(null, '/mylist')
            } else {
                redirect(null, '/login')
            }


        }

        signOut = async () => {
            setAuthToken('')
            // await this.props.apolloClient.cache.reset()


            redirect(null, '/login')
        }



        render() {
            const { user, ...props } = this.props;

            return <>
                <MetaTags />
                <Container>
                    <div style={{ minHeight: '100vh', position: 'relative' }}>
                        <div style={{ paddingBottom: '2.6rem' }}>

                            <PageLoader color='rgb(109, 123, 212)' height={5} options={{ showSpinner: false }} />
                            <ScreenClassProvider>

                                <UserProvider value={user}>
                                    <LoginWithModal visible={this.state.signInVisible} close={() => this.toggleSignInModal(false)} />
                                    <PremiumWithModal close={() => this.togglePremiumModal(false)} visible={this.state.premiumVisible} />
                                    <NavBar onSignInClicked={() => this.toggleSignInModal(true)} onSignOutClicked={this.signOut} />
                                    <Component  {...props} signOut={this.signOut} signIn={this.signIn} premiumClicked={() => this.togglePremiumModal(true)} />
                                </UserProvider>

                            </ScreenClassProvider>
                        </div>
                        <div className='footer-container' style={{ position: 'absolute', bottom: 0, height: '2.5rem', width: '100%', }}>
                            <Footer />
                        </div>
                        <style jsx>
                            {`
                            .footer-container {
                                opacity:.3;
                                transition: all 0.3s cubic-bezier(0.42, 0, 0.71, 1.1);
                            }
                            .footer-container:hover {
                                opacity:1
                            }
                            `}
                        </style>
                    </div>
                </Container >
            </>
        }
    }


}




export default (Layout)