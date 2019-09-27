import React from 'react';
import { getAuthToken, isExpired } from 'functions/authToken';
import redirect from 'functions/redirect';

export const withAuth = (WrappedComponent: any) => {
    return class AuthComponent extends React.Component {
        static async getInitialProps(ctx) {
            let authToken = getAuthToken(ctx)
            if (isExpired(authToken)) {
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