import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import bg from "../public/images/bg-img.jpg";
import styles from '../styles/Introduction.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinTongue } from "@fortawesome/free-solid-svg-icons";

function Introduction() {
  return (
    <Container fluid className={`${styles.container} p-0`}>
      <Image src={bg} alt="background Image" />
      <div className={`${styles.textDiv} col-xl-6 col-md-8 col-12 py-3 rounded-3 text-center`}>
        <h1 className="display-6 fw-bold">Asian Food - The river of life</h1>
        <p className="fs-md-4 fs-5  pt-1 pt-md-2">
          A place where you can enjoy the most authentic food <FontAwesomeIcon className="fs-3" icon={faFaceGrinTongue} />
        </p>
      </div>
    </Container>
  );
}

export default Introduction;
