import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";

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
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.closeCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div onClick={props.closeCart}>Cart here</div>
        </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Cart;
