import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'isomorphic-unfetch'
import { getAuthToken, setAuthToken } from './authTokenCookie'
import { Observable } from 'apollo-boost'

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent, { ssr = true } = {}) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState, { getToken })
        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        )
    }

    if (process.env.NODE_ENV !== 'production') {
        // Find correct display name
        const displayName =
            PageComponent.displayName || PageComponent.name || 'Component'

        // Warn if old way of installing apollo is used
        if (displayName === 'App') {
            console.warn('This withApollo HOC only works with PageComponents.')
        }

        // Set correct display name for devtools
        WithApollo.displayName = `withApollo(${displayName})`

        // Add some prop types
        WithApollo.propTypes = {
            // Used for getDataFromTree rendering
            apolloClient: PropTypes.object,
            // Used for client/server rendering
            apolloState: PropTypes.object
        }
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async ctx => {
            const { AppTree } = ctx

            // Run all GraphQL queries in the component tree
            // and extract the resulting data
            const apolloClient = (ctx.apolloClient = initApolloClient(
                {},
                {
                    getToken: () => getToken(ctx)
                }
            ))

            const pageProps = PageComponent.getInitialProps
                ? await PageComponent.getInitialProps(ctx)
                : {}

            // Only on the server
            if (typeof window === 'undefined') {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (ctx.res && ctx.res.finished) {
                    return {}
                }

                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await import('@apollo/react-ssr')
                        await getDataFromTree(
                            <AppTree
                                pageProps={{
                                    ...pageProps,
                                    apolloClient
                                }}
                            />
                        )
                    } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error('Error while running `getDataFromTree`', error)
                    }
                }

                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind()
            }

            // Extract query data from the Apollo store
            const apolloState = apolloClient.cache.extract()

            return {
                ...pageProps,
                apolloState
            }
        }
    }

    return WithApollo
}

let apolloClient = null

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */

//@ts-ignore
function initApolloClient(...args) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        //@ts-ignore
        return createApolloClient(...args)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        //@ts-ignore
        apolloClient = createApolloClient(...args)
    }

    return apolloClient
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */
function createApolloClient(initialState = {}, { getToken }) {
    const fetchOptions: { agent?: any } = {}

    // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
    // 'https-proxy-agent' is required here because it's a sever-side only module
    if (typeof window === 'undefined') {
        if (process.env.https_proxy) {
            fetchOptions.agent = new (require('https-proxy-agent'))(
                process.env.https_proxy
            )
        }
    }

    const httpLink = new HttpLink({

        credentials: 'same-origin',
        fetch,
        fetchOptions,
        uri: 'https://rade-api-service.onrender.com/graphql',
        useGETForQueries: true
    })

    const authLink = setContext((request, { headers }) => {
        const token = getToken()
        return {
            headers: {
                ...headers,
                token: token || ''
            }
        }
    })

    const errorLink = onError(({ operation, forward, graphQLErrors, networkError }) => {

        if (graphQLErrors) {
            console.log(`[graphql-error-simdi]: ${JSON.stringify(graphQLErrors)}`)

            for (const error of graphQLErrors) {

                switch (error.extensions.code) {
                    case 'UNAUTHENTICATED':
                        const oldHeaders = operation.getContext().headers
                        operation.setContext({
                            headers: {
                                ...oldHeaders,
                                token: ''
                            }
                        })
                        return forward(operation)


                    default:
                        break;
                }


            }


        }
        if (networkError) {
            // if(networkError.)
            console.log(`[network-error-simdi]: ${networkError}`)
        }
    })

    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
        link: authLink.concat(errorLink).concat(httpLink),
        cache: new InMemoryCache().restore(initialState)
    })
}

/**
 * Get the user token from cookie
 * @param {Object} req
 */
function getToken(ctx) {
    return getAuthToken(ctx)
}
// function getToken(req) {
//     const cookies = cookie.parse(req ? req.headers.cookie || '' : document.cookie)
//     return cookies.token
// }
