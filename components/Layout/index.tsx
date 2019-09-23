import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import { ScreenClassProvider } from 'react-grid-system';



const userInfo = {
    userName: 'IncredibleGonzo',
    userImage: "https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png",
    isPremium: true,
    epochTimeCreated: 1504224000 * 1000
}


export default ({ children }) => {
    return <Container>
        <ScreenClassProvider>
            <NavBar {...userInfo} />
            {children}
        </ScreenClassProvider>
    </Container>

}