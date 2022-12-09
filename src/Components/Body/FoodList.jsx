import React from 'react'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './FoodList.module.css'
import $ from 'jquery';

function FoodList() {
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchData(){
        let response = fetch()
    }
    useEffect(()=>{

    }, []);
    const list = <div className={`${styles.list}`}>
                    {/* list goes here */}
                </div>
  return (
    <Container className='pt-5'>
        <Container fluid className={`${styles.container} py-3 px-4 mb-5 text-center`}>
            <div className={`${styles.intro}`}>
                <h2 className='fs-2'>Ramen</h2>
                <p className='fs-5'>Have a taste of the noodles made from the finest Japanese cooks</p>
            </div>
            {!isLoading && list}
            {isLoading && <p>I'm spinning</p>}
        </Container>
    </Container>
  )
}

export default FoodList