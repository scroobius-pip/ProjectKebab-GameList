import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import isBrowser from '../isBrowser'
import { setContext } from 'apollo-link-context'

let apolloClient = null

function create(initialState = {}, { getToken }) {
    const httpLink = new HttpLink({
        credentials: 'same-origin',
        fetch,
        uri: 'https://swapem-api.scroobius-pip.now.sh/graphql',
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

    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initialState)
    })
}

export default function initApollo(...args) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        //@ts-ignore
        return create(...args)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        //@ts-ignore
        apolloClient = create(initialState)
    }

    return apolloClient
}