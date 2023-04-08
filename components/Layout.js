import React from "react";
import MainNav from "./MainNav";
import { Container } from "react-bootstrap";
import style from "../styles/Layout.module.css";

function Layout(props) {
  return (
    <React.Fragment>
      <MainNav />
      <br />
      <Container className={`${style.container}`}>{props.children}</Container>
      <br />
    </React.Fragment>
  );
}

export default Layout;
