import React from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../static/nprogress.css'
import { getAuthToken, setAuthToken, isExpired } from 'functions/authToken'
import User from 'types/IUser'
import { LoginWithModal, PremiumWithModal } from '@components/Modals'



Router.events.on('routerChangeStart', () => {
    NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface Props {
    authToken: string
}

interface State {
    user: User
    premiumVisible: boolean
    signInVisible: boolean
}

class MyApp extends App<Props, {}, State> {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            premiumVisible: false,
            signInVisible: false
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


    signInClicked = () => {
        this.toggleSignInModal()
        this.setState({
            user: {
                id: 'simdi',
                info: {
                    userName: 'IncredibleGonzo',
                    userImageUrl: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
                    isPro: true,
                    epochTimeCreated: 1504224000 * 1000
                },
            }
        })
    }


    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                </Head>

                <Layout signInClicked={this.signInClicked} user={this.state.user} >
                    <LoginWithModal visible={this.state.signInVisible} close={() => this.toggleSignInModal(false)} />
                    <PremiumWithModal close={() => this.togglePremiumModal(false)} visible={this.state.premiumVisible} />

                    <Component {...pageProps} signInClicked={this.signInClicked} premiumClicked={this.togglePremiumModal} />
                </Layout>

            </>
        )
    }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let authToken = getAuthToken(ctx)
    if (isExpired(authToken)) {
        authToken = ''
    }

    return {
        pageProps: {
            authToken,
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
    }
}

export default MyApp