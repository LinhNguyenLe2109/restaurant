import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  NavDropdown,
  Form,
  Button,
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import { useAtom } from "jotai";
import { useState } from "react";
import style from "../styles/MainNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBowlFood,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { orderListAtom, cartIsShownAtom } from "@/store";

function MainNav(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [orderList, setOrderList] = useAtom(orderListAtom);
  const [cartIsShown, setCartIsShown] = useAtom(cartIsShownAtom);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsExpanded(false);
  };

  // show modal
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  let menuTitle = (
    <>
      <FontAwesomeIcon icon={faBowlFood} /> Menu
    </>
  );

  let totalItem = orderList.reduce((sum, item) => sum + item.amount, 0);
  return (
    <React.Fragment>
      <Navbar
        expanded={isExpanded}
        expand="lg"
        // className="fixed-top navbar-dark bg-dark"
        className={`fixed-top ${style.mainNav} navbar-dark py-4`}
      >
        <Container>
          <Navbar.Brand className="fs-3 fw-bold" href="/">
            NeoFood
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsExpanded((expand) => !expand)}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link legacyBehavior passHref href="/">
                <Nav.Link
                  active={router.pathname === "/"}
                  onClick={() => setIsExpanded(false)}
                >
                  <FontAwesomeIcon icon={faHouse} className="me-1" />
                  Home
                </Nav.Link>
              </Link>
              <NavDropdown
                onClick={() => setIsExpanded(false)}
                title={menuTitle}
                id="basic-nav-dropdown"
              >
                <Link legacyBehavior passHref href="/category/Japanese">
                  <NavDropdown.Item active={router.pathname === "//category/Japanese"}>
                    Japanese Food
                  </NavDropdown.Item>
                </Link>
                <Link legacyBehavior passHref href="/category/Vietnamese">
                  <NavDropdown.Item active={router.pathname === "/category/Vietnamese"}>
                    Vietnamese Food
                  </NavDropdown.Item>
                </Link>
                <Link legacyBehavior passHref href="/category/Korean">
                  <NavDropdown.Item active={router.pathname === "/category/Korean"}>
                    Korean Food
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Form onSubmit={(e) => handleSubmit(e)} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  name="search"
                />
                <Button type="submit" variant="outline-success">
                  Search
                </Button>
              </Form>
            </Nav>
            &nbsp;
            <Button
              href="#cart"
              className={`${style.cartButton} btn btn-outline-dark mt-3 mt-lg-0`}
              type="button"
              onClick={showCartHandler}
            >
              <FontAwesomeIcon icon={faCartShopping} className="me-1" />
              View cart <span className={style.totalItem}>{totalItem}</span>
            </Button>
            {/* Do this later */}
            {/* &nbsp;
            <Nav>
              <NavDropdown
                onClick={() => setIsExpanded(false)}
                title="User Name"
                id="basic-nav-dropdown"
              >
                <Link legacyBehavior passHref href="/favourites">
                  <NavDropdown.Item active={router.pathname === "/favourites"}>
                    Favourites
                  </NavDropdown.Item>
                </Link>
                <Link legacyBehavior passHref href="/history">
                  <NavDropdown.Item active={router.pathname === "/history"}>
                    Search History
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </React.Fragment>
  );
}

export default MainNav;
