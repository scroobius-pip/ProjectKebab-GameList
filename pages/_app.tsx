import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'

Router.events.on('routerChangeStart', url => {
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