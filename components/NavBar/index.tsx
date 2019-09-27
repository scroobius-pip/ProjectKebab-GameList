import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import UserInfoProfileImage from '../UserInfo/UserInfo.ProfileImage'
import { font, colors } from '../../styles'
// import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React from 'react'
import User from 'types/IUser'

interface Props {
    user?: User
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


const NavBarComponent = ({ user, onSignInClicked, onSignOutClicked }: Props) => {

    const LoggedInComponent = ({ user }: { user: User }) => {
        const { description, epochTimeCreated, isPro, isBanned, userImageUrl, userName, location } = user.info

        return (
            <>  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <StyledNavItem href='/matches'>MATCHES</StyledNavItem>
                        <StyledNavItem href='/offers'>OFFERS</StyledNavItem>
                    </Nav>
                    <Nav style={{ marginRight: 20 }}>
                        <StyledNavItem href='/mylist'>MY GAME LIST</StyledNavItem>
                        <StyledNavItem href='/forums'>FORUMS</StyledNavItem>

                    </Nav>
                    <Nav style={{}}>
                        <span>
                            <NavDropdown as='li' title={
                                <>
                                    <span style={{ marginRight: 10 }}>
                                        <UserInfoProfileImage size={40} src={userImageUrl} />
                                    </span>
                                    <span style={{ fontWeight: 600 }}>{userName}</span>
                                </>
                            } id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => Router.push('/settings')}>
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
                <Navbar.Brand href="/profile/me" style={{ marginRight: 'auto' }}>
                    <img style={{ height: 25, marginBottom: 8 }} src={require('../../assets/icons/logo.svg')} />
                </Navbar.Brand>
                {user ?
                    <LoggedInComponent user={user} />
                    :
                    <Nav style={{ justifyContent: 'flex-end' }}>

                        <span>
                            <Button onClick={onSignInClicked}>
                                <span style={{ fontWeight: font.weights.medium, marginRight: 10 }}>Create your game list</span>
                                <img style={{ width: '1em', verticalAlign: 'unset' }} src={require('../../assets/icons/pencil.svg')} />
                            </Button>
                        </span>
                    </Nav>
                }

            </Navbar>

        </div>
    )
}

export default NavBarComponent