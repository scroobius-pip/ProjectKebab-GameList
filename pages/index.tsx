import { getAuthToken, isExpired } from 'functions/utils/authToken';
import redirect from 'functions/utils/redirect';
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

