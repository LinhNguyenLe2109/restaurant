import React from 'react'
import style from "./Header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-scroll";

function Header() {
  return (
    <Navbar expand="md" className={`${style.nav}`}>
      <Container>
        <Navbar.Brand href="#home" className={`${style.brandName}  fs-1`}>Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <NavDropdown title="Menu" id="menu-dropdown">
              <NavDropdown.Item href="#action/3.1">Food A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Food B
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Food C</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Food D
              </NavDropdown.Item>
            </NavDropdown>
            {/* Delete this after */}
            <Nav.Link href="#cart">View card</Nav.Link>
            {/* Cart here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header