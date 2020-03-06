import React from 'react';
import { getAuthToken, isExpired, setAuthToken, } from 'functions/utils/authTokenCookie';
import redirect from 'functions/utils/redirect';
import { inspect } from 'util'

export const withAuth = (WrappedComponent: any) => {
    return class AuthComponent extends React.Component {
        static async getInitialProps(ctx) {
            let authToken = getAuthToken(ctx)

            // const authToken = ctx.headers.token
            if (!authToken || isExpired(authToken)) {
                console.log('expired or invalid token')

                redirect(ctx, '/login')
                return
            }
            // console.log(authToken)
            // if (isExpired(authToken)) {
            //     console.log('expired or invalid token')
            //     redirect(ctx, '/login')
            //     return
            // }
            return { authToken, ...(WrappedComponent.getInitialProps ? await WrappedComponent.getInitialProps(ctx) : {}) }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}