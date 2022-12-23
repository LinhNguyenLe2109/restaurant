import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import styles from './FoodList.module.css'
import $ from 'jquery';
import { useCallback } from 'react';
import parse from 'html-react-parser'
import CustomCard from '../UI/CustomCard';

function FoodList() {
    const [data, setData]= useState({});
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "0ecccc5ef7754191ab8b6bd26d0dd5da";
    const fetchData = useCallback(async ()=>{
        $.ajax({
                url: "https://api.spoonacular.com/recipes/complexSearch", 
                data: {
                    apiKey: API_KEY, 
                    cuisine: 'Japanese',
                    // query: 'Bun',
                    number: 10
                },
                success: successfulFetchData,
                dataType: 'json',
            })
    }, [])
    const fetchInformation = useCallback(async (id)=>{
        $.ajax({
                url: `https://api.spoonacular.com/recipes/${id}/information`, 
                data: {
                    apiKey: API_KEY, 
                    includeNutrition: false
                },
                success: successfulFetchInformation,
                dataType: 'json',
            })
    }, [])
    useEffect(()=>{
        fetchData();
    }, [fetchData]);

    //function run after successfully get a list of data
    function successfulFetchData(retrievedData){
        console.log(retrievedData.results[0]);
        let test =fetchInformation(retrievedData.results[0].id) ;
    }

    //function returns a detailed information of a food
    function successfulFetchInformation(retrievedData){
        console.log(retrievedData);
        let test = {
            id: retrievedData.id,
            title: retrievedData.title,
            image: retrievedData.image,
            // price divided by 100 to get actual price
            pricePerServing: retrievedData.pricePerServing,
            diets: retrievedData.diets,
            summary: retrievedData.summary,
            // multiply price with number of saving to get real price
            servings: retrievedData.servings
        }
        setData(test);
        // let test =fetchInformation(retrievedData.results[0].id) ;
        // setData(test);
    }
    const convertSummary = (text) =>{
        let parseText
    }
    const list = <div className={`${styles.list}`}>
                    {/* list goes here */}
                    {/* <p>{data.title}</p> */}
                    <CustomCard data = {data}></CustomCard>
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