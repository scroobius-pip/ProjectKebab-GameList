import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { Container, Spinner } from 'react-bootstrap';
import NavBar from '../NavBar';
import { ScreenClassProvider } from 'react-grid-system';
import { UserProvider } from 'context/UserContext';
import User from 'types/IUser';
import React from 'react';
import { withApollo } from 'functions/utils/apollo';
import getUserInfo from 'functions/graphql/queries/getUserInfo';


interface Props {
    signInClicked: () => any
    signOutClicked: () => any
    children: any
    user?: User
}

const Layout = (props: Props) => {
    return <Container>
        <ScreenClassProvider>
            <UserProvider value={props.user}>
                <NavBar onSignInClicked={props.signInClicked} onSignOutClicked={props.signOutClicked} />
                {props.children}
            </UserProvider>
        </ScreenClassProvider>
    </Container >

}


Layout.getInitialProps = async ({ apolloClient }) => {
    const user = await getUserInfo(apolloClient)
    return { user }
}

export default Layout