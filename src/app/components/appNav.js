import {AppBar, Tabs, Tab, LeftNav} from 'material-ui';
import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class AppNav extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
      }
    
      handleOpen = () => {
        this.setState({ isOpen: true })
      }
    
      handleClose = () => {
         this.setState({ isOpen: false })
      }


    render() {
        return (
            <Navbar bsStyle='inverse'>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='/home'>Kartik Chem</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href='aboutUs'>About Us</NavItem>
                        <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown" onMouseEnter = { this.handleOpen }
                        onMouseLeave = { this.handleClose }
                        open={ this.state.isOpen }>
                            <MenuItem eventKey={3.1} href='/products'>Textiles</MenuItem>
                            <MenuItem eventKey={3.2} href='/products'>Paints</MenuItem>
                            <MenuItem eventKey={3.3} href='/products'>Other</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="login">Login</NavItem>
                        <NavItem eventKey={2} href="#">Help</NavItem>
                    </Nav>
            </Navbar>
        );
    }
}

export default AppNav;
