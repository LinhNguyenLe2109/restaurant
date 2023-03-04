import "./App.css";
import BasicExample from "./Test/BasicExample";
import Header from "./Components/Header/Header";
import React, { useState } from "react";
import Introduction from "./Components/Body/Introduction";
import FoodMenu from "./Components/Body/FoodMenu";
import Cart from "./Components/Body/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderList, setOrderList] = useState([]);
  // add an item to the order list
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
            newArray.push({ ...dish, amount: dish.amount++ });
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
  // show modal
  const showCartHandler = () => {
    console.log("hi")
    setCartIsShown(true);
  };
  // remove modal
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <React.StrictMode>
      {cartIsShown && <Cart closeCart = {hideCartHandler} />}
      <Header orderList={orderList} showCart={showCartHandler} />
      <Introduction />
      <FoodMenu addItem={addAnItem} />
    </React.StrictMode>
  );
}

export default App;
