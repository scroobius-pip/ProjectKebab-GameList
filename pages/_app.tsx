import React from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../static/nprogress.css'
import { getAuthToken, setAuthToken, isExpired } from 'functions/utils/authToken'
import User from 'types/IUser'
import { LoginWithModal, PremiumWithModal } from '@components/Modals'
import { AuthTokenProvider } from 'context/AuthTokenContext'
import UserContext, { UserProvider } from 'context/UserContext'
import redirect from 'functions/utils/redirect'
import WithApollo from '@components/WithApollo'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'

Router.events.on('routerChangeStart', () => {
    NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface Props {
    authToken: string
    user?: User
    apolloClient: ApolloClient<any>
}

interface State {
    user?: User
    authToken: string
    premiumVisible: boolean
    signInVisible: boolean
}

class MyApp extends App<Props, {}, State> {

    constructor(props) {
        super(props)

        this.state = {
            premiumVisible: false,
            signInVisible: false,
            authToken: this.props.authToken,
            user: this.props.user
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
            this.setState({
                authToken: token,
                user: await getUserWithAuthToken(token)
            })
            setAuthToken(token)
            redirect(null, '/mylist')
        } else {
            redirect(null, '/login')
        }


    }

    signOut = async () => {
        setAuthToken('')
        redirect(null, '/')
        this.setState({
            user: null,
            authToken: null
        })
    }


    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                </Head>
                <AuthTokenProvider value={this.state.authToken}>
                    <UserProvider value={this.state.user}>
                        <ApolloProvider client={this.props.apolloClient}>

                            <Layout signInClicked={this.toggleSignInModal} signOutClicked={this.signOut} >
                                <LoginWithModal visible={this.state.signInVisible} close={() => this.toggleSignInModal(false)} />
                                <PremiumWithModal close={() => this.togglePremiumModal(false)} visible={this.state.premiumVisible} />
                                <Component {...pageProps} signOut={this.signOut} signIn={this.signIn} premiumClicked={this.togglePremiumModal} />
                            </Layout>
                        </ApolloProvider>
                    </UserProvider>

                </AuthTokenProvider>

            </>
        )
    }
}

const getUserWithAuthToken = (authToken: string): Promise<User> | User => {
    if (authToken) {
        return {
            id: 'simdi',
            info: {
                userName: 'IncredibleGonzo',
                userImageUrl: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
                isPro: true,
                epochTimeCreated: 1504224000 * 1000
            },

        }
    }
    return null
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let authToken = getAuthToken(ctx)
    if (isExpired(authToken)) {
        authToken = ''
    }
    // console.log(`authtoken: ${authToken}`)

    const user = authToken ? await getUserWithAuthToken(authToken) : null
    // console.log(user)
    return {
        user,
        authToken,
        pageProps: {
            authToken,
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
    }
}

export default WithApollo(MyApp)