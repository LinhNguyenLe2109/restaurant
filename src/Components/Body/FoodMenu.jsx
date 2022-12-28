import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import FoodList from './FoodList';
import styles from './FoodMenu.module.css'

function FoodMenu() {
    
  return (
    <Container className='pt-5'>
        <Container fluid className={`${styles.container} py-3 px-4 mb-5 text-center`}>
            <FoodList cuisine = "Japanese"></FoodList>
        </Container>
    </Container>
  )
}

export default FoodMenu;