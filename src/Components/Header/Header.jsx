import React from 'react'
import style from "./Header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-scroll";

function Header() {
  const title =<>
    <i className="fa-solid fa-bowl-food me-1"></i>Menu
  </>;
  return (
    <Navbar expand="md" className={`${style.nav}`}>
      <Container>
        <Navbar.Brand 
        href="#home" 
        className={`${style.brandName}  fs-1`}>
          Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Nav.Link href="#home" ><i className="fa-solid me-1 fa-house"></i>Home</Nav.Link>
            <NavDropdown title={title} id="menu-dropdown">
              <NavDropdown.Item href="#Japanese">
                Japanese Food
              </NavDropdown.Item>
              <NavDropdown.Item href="#Vietnamese">
              Vietnamese Food
              </NavDropdown.Item>
              <NavDropdown.Item href="#Korean">
                Korean Food
              </NavDropdown.Item>
            </NavDropdown>
            {/* Delete this after */}
            
            {/* Cart here */}
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#cart"><i className="fa-solid fa-cart-shopping me-1"></i>View card</Nav.Link>
      </Container>
    </Navbar>
  )
}

export default Header