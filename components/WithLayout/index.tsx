import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import { ScreenClassProvider } from 'react-grid-system';
import { UserProvider } from 'context/UserContext';
import React, { } from 'react';
import getUserInfo from 'functions/graphql/queries/getUserInfo';
import { LoginWithModal, PremiumWithModal } from '@components/Modals';
import PageLoader from '@components/PageLoader'
import { setAuthToken } from 'functions/utils/authToken';
import redirect from 'functions/utils/redirect';


interface Props {

    Component: any
    user: any
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
            console.log(user)
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
            console.log(token)
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

            return <Container>
                <PageLoader color='rgb(109, 123, 212)' height={5} options={{ showSpinner: false }} />
                <ScreenClassProvider>

                    <LoginWithModal visible={this.state.signInVisible} close={() => this.toggleSignInModal(false)} />
                    <PremiumWithModal close={() => this.togglePremiumModal(false)} visible={this.state.premiumVisible} />
                    <UserProvider value={user}>
                        <NavBar onSignInClicked={() => this.toggleSignInModal(true)} onSignOutClicked={this.signOut} />
                        <Component  {...props} signOut={this.signOut} signIn={this.signIn} premiumClicked={() => this.togglePremiumModal(true)} />
                    </UserProvider>

                </ScreenClassProvider>
            </Container >
        }
    }


}




export default (Layout)