import React from "react";
import MainNav from "./MainNav";
import { Container } from "react-bootstrap";

function Layout(props) {
  return (
    <React.Fragment>
      <MainNav />
      <br />
      <Container>{props.children}</Container>
      <br />
    </React.Fragment>
  );
}

export default Layout;
