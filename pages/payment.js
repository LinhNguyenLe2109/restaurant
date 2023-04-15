import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useAtom } from "jotai";
import { orderListAtom } from "@/store";
import classes from "../styles/pages/payment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileBeam,
  faFaceAngry,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

function Payment() {
  const [orderList, setOrderList] = useAtom(orderListAtom);
  const [finish, setFinish] = useState(false);
  const router = useRouter();
  let subtotal = parseFloat(0);
  for(const item of orderList ){
    let price = (item.pricePerServing / 10).toFixed(2);
    subtotal += parseFloat(price);
  }
  console.log(subtotal);
  let deliveryFee = (subtotal / 50).toFixed(2);
  let tax = ((subtotal * 13) / 100).toFixed(2);
  let total = parseFloat(
    parseFloat(subtotal) + parseFloat(deliveryFee) + tax
  ).toFixed(2);
  const orderListDisplay = (
    <div>
      {orderList.map((item) => {
        let price = `$${(item.pricePerServing / 10).toFixed(2)}`;
        return (
          <React.Fragment key={item.id}>
            <h4>{item.title}</h4>
            <Container>
              <Row></Row>
            </Container>
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
  );
  const displayWithOrder = (
    <React.Fragment>
      <h1 className="mt-5 text-center fw-bold">Order Payment</h1>
      <Container className={`${classes.mainContainer}`}>
        <Container>
          <h2>Items</h2>
          <hr />
          {orderListDisplay}
        </Container>
        <Container>
          <h2>Review</h2>
          <hr />
          <Row>
            <Col xs={7}>Subtotal:</Col>
            <Col className={`${classes.priceCol}`}>{subtotal}</Col>
          </Row>
          <Row>
            <Col xs={7}>Delivery Fee:</Col>
            <Col className={`${classes.priceCol}`}>{deliveryFee}</Col>
          </Row>
          <Row>
            <Col xs={7}>Estimated Tax:</Col>
            <Col className={`${classes.priceCol}`}>{tax}</Col>
          </Row>
          <hr />
          <Row className={`${classes.total}`}>
            <Col xs={7}>Total:</Col>
            <Col className={`${classes.priceCol}`}>{total}</Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col xs={12} sm={6}>
              <Button className={`${classes.button}`}>Continue Shopping</Button>
            </Col>
            <Col xs={12} sm={6} className="mt-sm-0 mt-2 ">
              <Button
                className={`${classes.button}`}
                onClick={() => setFinish(true)}
              >
                Place Order
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      {finish && (
        <React.Fragment>
          <h3 className="mt-5 display-3 text-center">
            Hi there <FontAwesomeIcon icon={faFaceSmileBeam} />! this is the end
            of my project . Thank you so so much for checking it out
          </h3>
          <p className="fs-3 text-center">
            If you want to connect with me, here is my{" "}
            <Link href="https://github.com/LinhNguyenLe2109">gitHub</Link> as
            well as my{" "}
            <Link href="https://www.linkedin.com/in/le-linh-nguyen-21092002/">
              LinkedIn
            </Link>
          </p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
  const displayWithoutOrder = (
    <React.Fragment>
      <h1 className="mt-5 display-3 text-center fw-bold">
        Buddy! Why are you here? <FontAwesomeIcon icon={faFaceAngry} />
      </h1>
      <p className="fs-3 text-center">
        Go back and choose something, how can we process the payment without you
        choosing any food <FontAwesomeIcon icon={faUtensils} />
        ??
      </p>
      <Container className="text-center">
        <Button
          className={`${classes.button} ${classes.goBackButton}`}
          onClick={() => router.push("/")}
        >
          Go back to Home
        </Button>
      </Container>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      {orderList.length > 0 && displayWithOrder}
      {orderList.length == 0 && displayWithoutOrder}
    </React.Fragment>
  );
}

export default Payment;
