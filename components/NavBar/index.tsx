import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import UserInfoProfileImage from '../UserInfo/UserInfo.ProfileImage'
import { font, colors } from '../../styles'
// import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React from 'react'
import User from 'types/IUser'
import { UserConsumer } from 'context/UserContext'

interface Props {

    onSignInClicked: () => any
    onSignOutClicked: () => any
}

const StyledNavItem = ({ children, href }) => {
    const router = useRouter()
    const active = router.pathname === href
    return <Nav.Link onClick={() => Router.push(href)} style={{ fontWeight: font.weights.medium, padding: 7, ...(active ? ({ backgroundColor: '#ffffff0d', borderRadius: 5, color: '#ffffffbf', }) : ({})) }}>
        {children}
    </Nav.Link>

}


const NavBarComponent = ({ onSignInClicked, onSignOutClicked }: Props) => {
    const router = useRouter()
    const LoggedInComponent = ({ user }: { user: User }) => {
        const { description, epochTimeCreated, isPro, isBanned, userImageUrl, userName, location, email } = user.info

        return (
            <>  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <StyledNavItem href='/matches'>MATCHES</StyledNavItem>
                        <StyledNavItem href='/offers'>OFFERS</StyledNavItem>
                    </Nav>
                    <Nav style={{ marginRight: 20 }}>
                        <StyledNavItem href='/mylist'>MY GAME LIST</StyledNavItem>
                        <Nav.Link href='https://discord.gg/XcUPyaB' style={{ fontWeight: font.weights.medium, padding: 7 }}>

                            <img style={{ height: '2em' }} src={require('../../assets/icons/discord-icon.svg')} />

                            DISCORD
                        </Nav.Link>

                    </Nav>
                    <Nav style={{}}>
                        <span>
                            <NavDropdown title={
                                <>
                                    <span style={{ marginRight: 10 }}>
                                        <UserInfoProfileImage size={40} src={userImageUrl} />
                                    </span>
                                    <span style={{ fontWeight: 600 }}>{userName || email}</span>
                                </>
                            } id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => Router.replace('/preferences')}>
                                    <span>Settings</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={onSignOutClicked}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </span>


                    </Nav>
                </Navbar.Collapse>
            </>
        )
    }



    return (
        <div style={{ marginBottom: 20 }}>
            <Navbar collapseOnSelect expand='lg' variant="dark">
                <Navbar.Brand href="/profile/me" style={{}}>
                    <img style={{ height: '1.5em', marginBottom: 8 }} src={require('../../assets/icons/logo.svg')} />
                </Navbar.Brand>
                <UserConsumer>
                    {(user) => {
                        return user ?
                            <LoggedInComponent user={user} /> :
                            <Nav style={{ justifyContent: 'flex-end' }}>

                                {router.pathname === '/' ? null : <span>
                                    <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary }} onClick={onSignInClicked}>
                                        <span style={{ fontWeight: font.weights.medium, marginRight: 10 }}>Create your game list</span>
                                        <img style={{ width: '1em', verticalAlign: 'unset' }} src={require('../../assets/icons/pencil.svg')} />
                                    </Button>
                                </span>}
                            </Nav>

                    }}
                </UserConsumer>

            </Navbar>

        </div>
    )
}

export default NavBarComponent