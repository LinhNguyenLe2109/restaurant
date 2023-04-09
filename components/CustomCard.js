import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import styles from "../styles/CustomCard.module.css";
import { orderListAtom } from "@/store";
import { useAtom } from "jotai";
function CustomCard(props) {
  const [orderList, setOrderList] = useAtom(orderListAtom);

  const addAnItem = (itemDetails) => {
    //todo
    setOrderList((curArray) => {
      // create an empty array
      let newArray = [];
      let found = 0;
      if (curArray.length > 0) {
        for (const dish of curArray) {
          if (dish.id === itemDetails.id) {
            // if the dish is found in the order => update the total amount
            newArray.push({ ...dish, amount: dish.amount + 1 });
            found = 1;
          }
          // or just add into the new array
          else {
            newArray.push({ ...dish });
          }
        }
      }
      return found === 1
        ? newArray
        : [...newArray, { ...itemDetails, amount: 1 }];
    });
  };

  let price = `$${(props.data.pricePerServing / 10).toFixed(2)}`;
  return (
    <Card className={`col-3 ${props.className} ${styles.cardStyle}`}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title className="fs-4">{props.data.title}</Card.Title>

        {/* {data.id && <Card.Text>{parse(data.summary)}</Card.Text>} */}
        <Container
          fluid
          className={`d-flex justify-content-between align-items-center`}
        >
          <Button
            className={styles.button}
            onClick={() => addAnItem(props.data)}
          >
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
