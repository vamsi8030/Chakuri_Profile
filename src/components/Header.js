import React from 'react';
import { Link } from 'react-router-dom';
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap';
import ls from 'local-storage';

class Header extends React.Component {
  render() {
    let loginlogout;
    if (ls.get('token') && ls.get('token') !== '') {
        loginlogout = (
            <UncontrolledDropdown nav>
                <NavLink className="nav-link-icon mt-2" tag={Link} aria-expanded={false} aria-haspopup={true} data-toggle="dropdown" id="navbar-primary_dropdown_1">
                    <span style={spanStyle} className="nav-link-inner--text">Logout</span>
                </NavLink>
                <DropdownMenu aria-labelledby="navbar-primary_dropdown_1" right>
                    <DropdownItem divider />
                    <DropdownItem tag={Link} to="/logout">Logout</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    } else {
        loginlogout = (
            <NavLink className="nav-link-icon mt-2" to="/login" tag={Link}>
                <span style={spanStyle} className="nav-link-inner--text">Login</span>
            </NavLink>
      );
    }
    let logout;
    if (ls.get('token') && ls.get('token') !== '') {
        logout = <span></span>;
    } 

    let signup;
    if (ls.get('token') && ls.get('token') !== '') {
        signup = <span></span>;
    } else {
        signup = (
            <NavLink className="nav-link-icon mt-2" to="/Register" tag={Link}>
                <i className="ni ni-planet" /><span style={spanStyle} className="nav-link-inner--text">Register</span>
            </NavLink>
        );
    }
    return (
        <Navbar style={navbarStyle} className="navbar-horizontal navbar-dark bg-blue-500 navbar-fixed-top" expand="md">
            <Container>
                <NavbarBrand tag={Link} to="/#" style={spanStyle}>Search Job</NavbarBrand>
                <NavbarBrand tag={Link} to="/#" style={spanStyle}>About Us</NavbarBrand>
                <NavbarBrand tag={Link} to="/#" style={spanStyle}>Contact Us</NavbarBrand>

                <button aria-controls="navbar-primary" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbar-primary" data-toggle="collapse" id="navbar-primary" type="button">
                    <span className="navbar-toggler-icon" />
                </button>
            
                <UncontrolledCollapse navbar toggler="#navbar-primary">
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <Link to="/">
                                    <img alt="..."/>
                                </Link>
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button aria-controls="navbar-primary" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbar-primary" data-toggle="collapse" id="navbar-primary" type="button"></button>
                            </Col>
                        </Row>
                    </div>
                    <Nav className="ml-lg-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link-icon mt-2" to="/" tag={Link}>
                                <i className="ni ni-planet" />
                                <span style={spanStyle} className="nav-link-inner--text"></span>
                            </NavLink>
                        </NavItem>
                        <NavItem>{loginlogout}</NavItem>
                        <NavItem>{signup}</NavItem> 
                        <NavItem>{logout}</NavItem> 
                    </Nav>
                </UncontrolledCollapse>
            </Container>
        </Navbar>
    );
  }
}
const navbarStyle = {
  padding: '0px 20px',
  position: 'overflow',
  top: '0px',
  left: '0px'
};
const spanStyle = {
  fontSize: '16px',
  color: '#424242'
};

export default Header;