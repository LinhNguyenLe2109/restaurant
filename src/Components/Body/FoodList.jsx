import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import styles from './FoodList.module.css'
import $ from 'jquery';
import { useCallback } from 'react';

function FoodList() {
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "0ecccc5ef7754191ab8b6bd26d0dd5da";
    const fetchData = useCallback(()=>{
        // let response = $.get("https://api.spoonacular.com/recipes/complexSearch", {apiKey: API_KEY, })
        $.ajax({
                url: "https://api.spoonacular.com/recipes/complexSearch", 
                data: {
                    apiKey: API_KEY, 
                    cuisine: 'Japanese',
                    // query: 'Bun',
                    number: 10
                },
                success: successfulFetch,
                dataType: 'json',
            })
    }, [])
    useEffect(()=>{
        fetchData();
    }, [fetchData]);
    function successfulFetch(retrievedData){
        // console.log(retrievedData);
        setData(retrievedData.results[0]);
    }
    const list = <div className={`${styles.list}`}>
                    {/* list goes here */}
                    {/* <p>{data.title}</p> */}
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
  return (
    <Container className='pt-5'>
        <Container fluid className={`${styles.container} py-3 px-4 mb-5 text-center`}>
            <div className={`${styles.intro}`}>
                <h2 className='fs-2'>Japanese Food</h2>
                <p className='fs-5'>Have a taste of the noodles made from the finest Japanese cooks</p>
            </div>
            {!isLoading && list}
            {isLoading && <p>I'm spinning</p>}
        </Container>
    </Container>
  )
}

export default FoodList