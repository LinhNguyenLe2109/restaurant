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
import { searchHistoryAtom } from "@/store";
import { useState } from "react";
import style from "../styles/MainNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBowlFood, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function MainNav(props) {
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const [isExpanded, setIsExpanded] = useState(false);

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsExpanded(false);
    const queryString = `title=true&q=${event.target?.search?.value}`;
    setSearchHistory((current) => [...current, queryString]);
    if (event.target?.search?.value) {
      router.push(`/artwork?${queryString}`);
    }
  };

  let menuTitle = (
    <>
      <FontAwesomeIcon icon={faBowlFood} /> Menu
    </>
  );
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
                <Link legacyBehavior passHref href="/favourites">
                  <NavDropdown.Item active={router.pathname === "/favourites"}>
                    Japanese Food
                  </NavDropdown.Item>
                </Link>
                <Link legacyBehavior passHref href="/history">
                  <NavDropdown.Item active={router.pathname === "/history"}>
                    Vietnamese Food
                  </NavDropdown.Item>
                </Link>
                <Link legacyBehavior passHref href="/history">
                  <NavDropdown.Item active={router.pathname === "/history"}>
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
              onClick={props.showCart}
            >
              <FontAwesomeIcon icon={faCartShopping} className="me-1" />View cart{" "}
              <span className={style.totalItem}>0</span>
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
