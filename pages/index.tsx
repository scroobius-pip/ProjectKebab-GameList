import { getAuthToken, isExpired } from 'functions/authToken';
import redirect from 'functions/redirect';
import React from 'react';


export default class extends React.Component {
    static async getInitialProps(ctx) {
        let authToken = getAuthToken(ctx)
        if (isExpired(authToken)) {
            redirect(ctx, '/login')
            return
        } else {
            redirect(ctx, '/profile/me')
        }
    }
}

