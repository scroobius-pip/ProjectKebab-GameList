import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import UserInfoProfileImage from '../UserInfo/UserInfo.ProfileImage'
import { font } from '../../styles'
interface Props {
    userName: string
    userImage: string
}

const StyledNavItem = ({ children, }) => (
    <Nav.Link style={{ fontWeight: font.weights.medium }}>{children}</Nav.Link>
)

export default ({ userName, userImage }: Props) => {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' variant="dark">
                <Navbar.Brand href="#home" style={{}}>
                    <img style={{ height: 25, marginBottom: 8 }} src={require('../../assets/icons/logo.svg')} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <StyledNavItem>MATCHES</StyledNavItem>
                        <StyledNavItem >OFFERS</StyledNavItem>

                    </Nav>
                    <Nav style={{ marginRight: 20 }}>
                        <StyledNavItem >MY GAME LIST</StyledNavItem>
                        <StyledNavItem >FORUMS</StyledNavItem>

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
                                <NavDropdown.Item>Settings</NavDropdown.Item>
                                <NavDropdown.Item >Logout</NavDropdown.Item>
                            </NavDropdown>
                        </span>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
}