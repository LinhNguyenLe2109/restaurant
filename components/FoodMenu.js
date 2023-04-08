import React from "react";
import { Container } from "react-bootstrap";
import FoodList from "./FoodList";
import styles from "../styles/FoodMenu.module.css";

function FoodMenu(props) {
  return (
    <Container className="pt-5">
      <Container
        id="Japanese"
        fluid
        className={`${styles.container} py-3 px-4 mb-5 text-center`}
      >
        <FoodList
          addItem={props.addItem}
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
