import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavDropdown } from "react-bootstrap";
import { useAtom } from "jotai";
import { searchHistoryAtom } from "@/store";
import { useState } from "react";

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
  return (
    <React.Fragment>
      <Navbar
        expanded={isExpanded}
        expand="lg"
        className="fixed-top navbar-dark bg-dark"
      >
        <Container>
          <Navbar.Brand>Linh Nguyen Le</Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsExpanded((expand) => !expand)}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link legacyBehavior passHref href="/">
                <Nav.Link active={router.pathname === "/"} onClick={() => setIsExpanded(false)}>Home</Nav.Link>
              </Link>
              <Link legacyBehavior passHref href="/search">
                <Nav.Link active={router.pathname === "/search"} onClick={() => setIsExpanded(false)}>
                  Advanced Search
                </Nav.Link>
              </Link>
            </Nav>
            &nbsp;
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
            &nbsp;
            <Nav>
              <NavDropdown
                onClick={() => setIsExpanded(false)}
                title="User Name"
                id="basic-nav-dropdown"
              >
                <Link legacyBehavior passHref href="/favourites">
                  <NavDropdown.Item  active={router.pathname === "/favourites"}>Favourites</NavDropdown.Item>
                </Link>
                <Link legacyBehavior passHref href="/history">
                  <NavDropdown.Item  active={router.pathname === "/history"}>Search History</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </React.Fragment>
  );
}

export default MainNav;
