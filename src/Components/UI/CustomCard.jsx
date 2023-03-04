import React from "react";
import parse from "html-react-parser";
import { Container, Card, Button } from "react-bootstrap";
import styles from "./CustomCard.module.css";
function CustomCard(props) {
  let price = `$${(props.data.pricePerServing / 10).toFixed(2)}`;
  return (
    <Card className={`col-3 ${props.className}`}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title className="fs-4">{props.data.title}</Card.Title>

        {/* {data.id && <Card.Text>{parse(data.summary)}</Card.Text>} */}
        <Container
          fluid
          className={`d-flex justify-content-between align-items-center`}
        >
          <Button className={styles.button} onClick={() => props.addItem(props.data)}>
            Add to cart
          </Button>
          <Card.Text
            className={`${styles.price} d-inline-block 
              fs-5 fw-bold fst-italic`}
          >
            {price}
          </Card.Text>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
