import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import styles from "../styles/DishCard.module.css";
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
    <Card
      className={`col-xxl-2 col-lg-3 col-md-4 col-sm-5 col-8  mx-md-1 mx-auto ${props.className} ${styles.cardStyle}`}
    >
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title className={`fs-4 ${styles.title}`}>
          {props.data.title}
        </Card.Title>
        <Container
          fluid
          className={`d-md-flex mx-auto mx-md-0 justify-content-between align-items-center ${styles.priceAndAdd}`}
        >
          <Card.Text
            className={`${styles.price} d-block 
              fs-5 mb-1 mb-md-3 fw-bold fst-italic text-center`}
          >
            {price}
          </Card.Text>

          <div className="d-flex justify-content-center ms-0 ms-md-3">
            <Button
              className={`${styles.button} mx-auto`}
              onClick={() => addAnItem(props.data)}
            >
              Add to cart
            </Button>
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
