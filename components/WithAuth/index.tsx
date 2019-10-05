import React from 'react';
import { getAuthToken, isExpired } from 'functions/authToken';
import redirect from 'functions/redirect';

export const withAuth = (WrappedComponent: any) => {
    return class AuthComponent extends React.Component {
        static async getInitialProps(ctx) {
            let authToken = getAuthToken(ctx)
            console.log(authToken)
            if (isExpired(authToken)) {
                console.log('expired or invalid token')
                redirect(ctx, '/login')
                return
            }
            return { authToken, ...(WrappedComponent.getInitialProps ? await WrappedComponent.getInitialProps(ctx) : {}) }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}