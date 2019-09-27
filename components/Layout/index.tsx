import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import { ScreenClassProvider } from 'react-grid-system';
import { UserProvider } from 'context/UserContext';
import User from 'types/IUser';
import React from 'react';


interface Props {
    signInClicked: () => any
    children: any
}

export default (props: Props) => {
    return <Container>
        <ScreenClassProvider>
            <NavBar onSignInClicked={props.signInClicked} onSignOutClicked={() => { }} />
            {props.children}
        </ScreenClassProvider>
    </Container >

}

