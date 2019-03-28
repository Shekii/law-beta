import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
        <div>
              {/* <Navbar 
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
                        <LinkContainer to="/help">
                            <Nav.Link eventKey={4}>
                                Help
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="header">
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
                                </Nav>
                                <Nav>
                                    <LinkContainer to="/stats">
                                        <Nav.Link eventKey={4}>
                                            Statistics
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/help">
                                        <Nav.Link eventKey={5}>
                                            Help
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav>
                </Navbar.Collapse>
            </Navbar>
  
        </div>
    )
  }
}

export default Header;
