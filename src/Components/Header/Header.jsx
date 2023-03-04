import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

function Header(props) {
  const [openModal, setOpenModal] = useState(false);
  const title = (
    <>
      <i className="fa-solid fa-bowl-food me-1"></i>Menu
    </>
  );
  return (
    <Navbar expand="md" className={`${style.nav}`}>
      <Container>
        <Navbar.Brand href="#home" className={`${style.brandName}  fs-1`}>
          Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Nav.Link href="#home">
              <i className="fa-solid me-1 fa-house"></i>Home
            </Nav.Link>
            <NavDropdown title={title} id="menu-dropdown">
              <NavDropdown.Item href="#Japanese">
                Japanese Food
              </NavDropdown.Item>
              <NavDropdown.Item href="#Vietnamese">
                Vietnamese Food
              </NavDropdown.Item>
              <NavDropdown.Item href="#Korean">Korean Food</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button
          href="#cart"
          className={`${style.cartButton} btn btn-outline-dark`}
          type="button"
          onClick={props.showCart}
        >
          <i className="fa-solid fa-cart-shopping me-1"></i>View card
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
