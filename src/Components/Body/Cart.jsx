import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
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

const portalElement = document.getElementById("modal-section");

function Cart(props) {
  const [orderDone, setOrderDone] = useState(false);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.closeCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div onClick={props.closeCart}>
            {props.orderList.map((item) => {
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
        </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Cart;
