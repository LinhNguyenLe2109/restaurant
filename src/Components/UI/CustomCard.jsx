import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import styles from "./CustomCard.module.css"
function CustomCard(props) {
  return (
    <Card className='col-3'>
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            
            {/* {data.id && <Card.Text>{parse(data.summary)}</Card.Text>} */}
            <Container fluid className='d-flex justify-content-between align-items-center' >
              <Button className={styles.button}>Add to cart</Button>
              <Card.Text className={`${styles.price} d-inline-block fs-5 fw-bold fst-italic`}>${props.data.pricePerServing}</Card.Text>
            </Container>
            
        </Card.Body>
    </Card>
  )
}

export default CustomCard