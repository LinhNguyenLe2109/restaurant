import React from 'react'
import bg from '../../data/img/bg-img.jpg'
import { Container, Image } from 'react-bootstrap'
import styles from './Introduction.module.css'

function Introduction() {
  return (
    <Container fluid className={`${styles['intro-container']} p-0`}>
        <Image src={bg}/>
        <div className={`${styles.intro} col-xl-6 col-md-8 col-11 py-3`}>
            <h1>Weiss's restaurant</h1>
            <p className='fs-5'>A place where you can enjoy the most authentic food :P</p>
        </div>
    </Container>
    
  )
}

export default Introduction