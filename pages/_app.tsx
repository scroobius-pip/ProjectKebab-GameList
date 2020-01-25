import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { setAuthToken } from 'functions/utils/authTokenCookie'
import User from 'types/IUser'
import redirect from 'functions/utils/redirect'
import ApolloClient from 'apollo-client'
import getUserInfo from 'functions/graphql/queries/getUserInfo'
import './index.css'

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
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152414840-1"></script>
                    <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
                    <script />
                    <script dangerouslySetInnerHTML={googleAnalyticsCode} />
                    <script dangerouslySetInnerHTML={hotJarTrackingCode} />
                    <script dangerouslySetInnerHTML={webPushrCode} />
                </Head>
                <Component {...pageProps} />

            </>
        )
    }
}


export default MyApp

const paddleCode = {
    __html: `
    Paddle.Setup({vendor:101968,debug:true})
    `
}

const webPushrCode = {
    __html: `
    (function(w,d, s, id) {w.webpushr=w.webpushr||function(){(w.webpushr.q=w.webpushr.q||[]).push(arguments)};var js, fjs = d.getElementsByTagName(s)[0];js = d.createElement(s); js.id = id;js.src = "https://cdn.webpushr.com/app.min.js";
    fjs.parentNode.appendChild(js);}(window,document, 'script', 'webpushr-jssdk'));
    webpushr('init','BEYM7rmfL1x19yjxpqa4Unjyw06o5X-8UMpO1IiFUyG-G36vMzACLbk5oVV4NoVpXn056QsTyza7YIeNsuqzTTY')
    `
}
const hotJarTrackingCode = {
    __html: `
    <!-- Hotjar Tracking Code for nakamalist.now.sh -->

(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:1568335,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

    `
}


const googleAnalyticsCode = {
    __html: `
    
    <!-- Global site tag (gtag.js) - Google Analytics -->

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-152414840-1');


    `
}