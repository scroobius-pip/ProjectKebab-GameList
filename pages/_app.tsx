import React from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../static/nprogress.css'
import { setAuthToken } from 'functions/utils/authToken'
import User from 'types/IUser'
import { LoginWithModal, PremiumWithModal } from '@components/Modals'

import redirect from 'functions/utils/redirect'

import ApolloClient from 'apollo-client'
import getUserInfo from 'functions/graphql/queries/getUserInfo'
import { withApollo } from 'functions/utils/apollo'

Router.events.on('routerChangeStart', () => {
    NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface Props {

    apolloClient: ApolloClient<any>
}

interface State {
    user?: User
    premiumVisible: boolean
    signInVisible: boolean
}

class MyApp extends App<Props, {}, State> {

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
            this.setState({
                user: await getUserInfo(this.props.apolloClient)
            })
            setAuthToken(token)
            redirect(null, '/mylist')
        } else {
            redirect(null, '/login')
        }


    }

    signOut = async () => {
        setAuthToken('')
        await this.props.apolloClient.cache.reset()
        this.setState({
            user: null,
        })

        redirect(null, '/')
    }


    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                </Head>
                <Layout signInClicked={this.toggleSignInModal} signOutClicked={this.signOut} >
                    <LoginWithModal visible={this.state.signInVisible} close={() => this.toggleSignInModal(false)} />
                    <PremiumWithModal close={() => this.togglePremiumModal(false)} visible={this.state.premiumVisible} />
                    <Component {...pageProps} signOut={this.signOut} signIn={this.signIn} premiumClicked={this.togglePremiumModal} />
                </Layout>
            </>
        )
    }
}


export default MyApp
