import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
        <div>
             <Navbar 
                bg="dark" 
                variant="dark" 
                fixed="top"
                inverse="true"
                collapseOnSelect >
                <Navbar.Brand href="/">
                <img
                    src="/logo.svg"
                    width="30"
                    alt="PrecTablisher"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' PrecTablisher'}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/manage">
                            <Nav.Link eventKey={1}>
                                Manage Cases
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/upload">
                            <Nav.Link eventKey={2}>
                                Upload Case
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/search">
                            <Nav.Link eventKey={3}>
                                Search
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/stats">
                            <Nav.Link eventKey={4}>
                                Statistics
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
{/* <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}
  
        </div>
    )
  }
}

export default Header;
