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

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";

function MainNav() {
  config.autoAddCss = false;
  const [isExpanded, setIsExpanded] = useState(false);
  const [orderList, setOrderList] = useAtom(orderListAtom);
  const [cartIsShown, setCartIsShown] = useAtom(cartIsShownAtom);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsExpanded(false);
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
              <NavDropdown title={menuTitle} id="basic-nav-dropdown">
                <Link legacyBehavior passHref href="/category/Japanese">
                  <NavDropdown.Item
                    active={router.pathname === "//category/Japanese"}
                  >
                    Japanese Food
                  </NavDropdown.Item>
                </Link>
                <Link legacyBehavior passHref href="/category/Vietnamese">
                  <NavDropdown.Item
                    active={router.pathname === "/category/Vietnamese"}
                  >
                    Vietnamese Food
                  </NavDropdown.Item>
                </Link>
                <Link legacyBehavior passHref href="/category/Korean">
                  <NavDropdown.Item
                    active={router.pathname === "/category/Korean"}
                  >
                    Korean Food
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
            &nbsp;
            <Button
              href="#cart"
              className={`${style.cartButton} btn btn-outline-dark mt-3 mt-lg-0`}
              type="button"
              onClick={() => setCartIsShown((state) => !state)}
            >
              <FontAwesomeIcon icon={faCartShopping} className="me-1" />
              View cart <span className={style.totalItem}>{totalItem}</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </React.Fragment>
  );
}

export default MainNav;
