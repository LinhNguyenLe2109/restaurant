import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/pages/402.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faFaceSadCry } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Error402() {
  return (
    <Container className={`${styles.container} mt-5 p-3 rounded-5`}>
      <FontAwesomeIcon
        icon={faDatabase}
        className="mt-5 mb-3"
        style={{ "font-size": "7rem" }}
      />
      <h1>Error 402!!!</h1>
      <p>
        Hi there, sorry but I think I ran{" "}
        <strong className={`${styles.emphasize}`}>out of points</strong> to
        fetch any more data{" "}
        <FontAwesomeIcon icon={faFaceSadCry} className="fs-4" />.{" "}
        <Link legacyBehavior passHref href="/">
          <strong
            className={`${styles.emphasize} ${styles.link} text-decoration-underline`}
          >
            Please check back later!
          </strong>
        </Link>
      </p>
    </Container>
  );
}

export default Error402;
