import React, { Component } from 'react';
import {  Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">PrecTablisher</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/manage">Manage Cases</Nav.Link>
                <Nav.Link href="/upload">Upload Case</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/stats">Statistics</Nav.Link>
                </Nav>
            </Navbar>
  
        </div>
    )
  }
}

export default Header;
