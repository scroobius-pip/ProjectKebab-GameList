import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import UserInfoProfileImage from '../UserInfo/UserInfo.ProfileImage'
import { font } from '../../styles'
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



export default ({ userName, userImage }: Props) => {
    return (
        <>
            <Navbar style={{ marginBottom: 20 }} collapseOnSelect expand='lg' variant="dark">
                <Navbar.Brand href="/profile/me" style={{}}>
                    <img style={{ height: 25, marginBottom: 8 }} src={require('../../assets/icons/logo.svg')} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
                                    {/* <Link href='/settings'> */}
                                    <span>Settings</span>
                                    {/* </Link> */}
                                </NavDropdown.Item>
                                <NavDropdown.Item>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </span>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </>
    )
}