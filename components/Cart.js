import React, { useState, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import ReactDOM from "react-dom";
import classes from "../styles/Cart.module.css";
import { useAtom } from "jotai";
import { cartIsShownAtom, orderListAtom } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileWink,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
// orderList
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Cart(props) {
  const [orderDone, setOrderDone] = useState(false);
  const [orderList, setOrderList] = useAtom(orderListAtom);
  const [cartIsShown, setCartIsShown] = useAtom(cartIsShownAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

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

  const takeoutAnItem = (itemDetails) => {
    setOrderList((curArray) => {
      // create an empty array
      let newArray = [];
      for (const dish of curArray) {
        if (dish.id === itemDetails.id) {
          // if the dish is found in the order => update the total amount
          if (dish.amount > 1) {
            newArray.push({ ...dish, amount: dish.amount - 1 });
          }
        }
        // or just add into the new array
        else {
          newArray.push({ ...dish });
        }
      }
      return newArray;
    });
  };

  const orderListDisplay = (
    <div>
      {orderList.map((item) => {
        let price = `$${(item.pricePerServing / 10).toFixed(2)}`;
        return (
          <React.Fragment key={item.id}>
            <h4>{item.title}</h4>
            <div>
              <p>
                Price: {price} <br />
                Amount:{" "}
                <FontAwesomeIcon
                  className={`${classes.modifyButton}`}
                  icon={faPlus}
                  onClick={() => addAnItem(item)}
                />{" "}
                {item.amount}
                <FontAwesomeIcon
                  className={`${classes.modifyButton}`}
                  icon={faMinus}
                  onClick={() => takeoutAnItem(item)}
                />
              </p>
            </div>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );

  const noOrder = (
    <div className="text-center">
      <FontAwesomeIcon
        className={`${classes.smiley} mb-3`}
        icon={faFaceSmileWink}
      />
      <p className="fs-4" style={{ color: "black" }}>
        Make sure you{" "}
        <strong className={`${classes.highlight}`}>add the dishes</strong> you
        like before checking out
      </p>
    </div>
  );

  const cartContent = (
    <React.Fragment>
      <Backdrop onClose={hideCartHandler} />
      <ModalOverlay>
        {orderList.length > 0 && orderListDisplay}
        {orderList.length == 0 && noOrder}
        <div className={`position-relative w-100 d-flex justify-content-end`}>
          {orderList.length > 0 && (
            <Button
              className={`${classes.button} ${classes.orderButton}`}
              onClick={() => setOrderDone((stat) => !stat)}
            >
              Order
            </Button>
          )}
          <Button className={`${classes.button}`} onClick={hideCartHandler}>
            Continue shopping
          </Button>
        </div>

        {orderDone && (
          <Alert variant="success">Order finished, thank you :)</Alert>
        )}
      </ModalOverlay>
    </React.Fragment>
  );

  return mounted
    ? ReactDOM.createPortal(cartContent, document.querySelector("#modal"))
    : null;
}

export default Cart;
