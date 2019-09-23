import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import UserInfoProfileImage from '../UserInfo/UserInfo.ProfileImage'
import { font, colors } from '../../styles'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { Children } from 'react'
import React from 'react'

interface Props {
    userName: string
    userImage: string
}

const StyledNavItem = ({ children, href }) => {
    const router = useRouter()
    const active = router.pathname === href
    return <Nav.Link onClick={() => Router.push(href)} style={{ fontWeight: font.weights.medium, padding: 7, ...(active ? ({ backgroundColor: '#ffffff0d', borderRadius: 5, color: '#ffffffbf', }) : ({})) }}>
        {children}
    </Nav.Link>


}

const loggedIn = false


export default ({ userName, userImage }: Props) => {
    return (
        <div style={{ marginBottom: 20 }}>
            <Navbar collapseOnSelect expand='lg' variant="dark">
                <Navbar.Brand href="/profile/me" style={{ marginRight: 'auto' }}>
                    <img style={{ height: 25, marginBottom: 8 }} src={require('../../assets/icons/logo.svg')} />
                </Navbar.Brand>
                {loggedIn ? <>  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
                                            <UserInfoProfileImage size={40} src={userImage} />
                                        </span>
                                        <span style={{ fontWeight: 600 }}>{userName}</span>
                                    </>
                                } id="collasible-nav-dropdown">
                                    <NavDropdown.Item onClick={() => Router.push('/settings')}>
                                        <span>Settings</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </span>


                        </Nav>
                    </Navbar.Collapse>
                </> :
                    <Nav style={{ justifyContent: 'flex-end' }}>

                        <span>
                            <Button>
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