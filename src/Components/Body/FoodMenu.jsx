import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import FoodList from "./FoodList";
import styles from "./FoodMenu.module.css";

function FoodMenu() {
  return (
    <Container className="pt-5">
      <Container
        id="Japanese"
        fluid
        className={`${styles.container} py-3 px-4 mb-5 text-center`}
      >
        <FoodList
          foodCatDesc="Have a taste of the noodles made from the finest Japanese chiefs"
          foodCategory="Japanese food"
          cuisine="Japanese"
        ></FoodList>
      </Container>
      {/* <Container id="Vietnamese" fluid 
        className={`${styles.container} py-3 px-4 mb-5 text-center`}>
            <FoodList 
            foodCatDesc ="Perfect flavor combination dishes" 
            foodCategory = "Vietnamese food" 
            cuisine = "Vietnamese"></FoodList>
        </Container>
        <Container id="Korean" fluid 
        className={`${styles.container} py-3 px-4 mb-5 text-center`}>
            <FoodList 
            foodCatDesc ="Who can say no to Korean food??" 
            foodCategory = "Korean food" 
            cuisine = "Korean"></FoodList>
        </Container> */}
    </Container>
  );
}

export default FoodMenu;
