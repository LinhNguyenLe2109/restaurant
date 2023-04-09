import React, { useState, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import ReactDOM from "react-dom";
import classes from "../styles/Cart.module.css";
import { useAtom } from "jotai";
import { cartIsShownAtom, orderListAtom } from "@/store";
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

// const portalElement = document.getElementById("modal");
// const portalElement = typeof document !== "undefined" ? document.body : null

function Cart(props) {
  const [orderDone, setOrderDone] = useState(false);
  const [orderList, setOrderList] = useAtom(orderListAtom);
  const [cartIsShown, setCartIsShown] = useAtom(cartIsShownAtom)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartContent = (
    <React.Fragment>
      <Backdrop onClose={hideCartHandler} />
      <ModalOverlay>
        <div onClick={hideCartHandler}>
          {orderList.map((item) => {
            let price = `$${(item.pricePerServing / 10).toFixed(2)}`;
            return (
              <React.Fragment key={item.id}>
                <h4>{item.title}</h4>
                <div>
                  <p>
                    Price: {price} <br />
                    Amount: {item.amount}
                  </p>
                </div>
                <hr />
              </React.Fragment>
            );
          })}
        </div>
        <Button onClick={() => setOrderDone((stat) => !stat)}>Order</Button>
        {orderDone && (
          <Alert variant="success">Order finished, thank you :)</Alert>
        )}
      </ModalOverlay>
    </React.Fragment>
  );

  return mounted ?  ReactDOM.createPortal(
    cartContent, document.querySelector("#modal")
  ) : null;
}

export default Cart;
