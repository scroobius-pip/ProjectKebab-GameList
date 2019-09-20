import React from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../static/nprogress.css'
Router.events.on('routerChangeStart', () => {
    NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>

            </>
        )
    }
}