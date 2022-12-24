import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import styles from './FoodList.module.css'
import $ from 'jquery';
import { useCallback } from 'react';
import CustomCard from '../UI/CustomCard';

function FoodList() {
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "0ecccc5ef7754191ab8b6bd26d0dd5da";
    //fetch a list of dishes
    const fetchData = useCallback(async ()=>{
        $.ajax({
                url: "https://api.spoonacular.com/recipes/complexSearch", 
                data: {
                    apiKey: API_KEY, 
                    cuisine: 'Japanese',
                    // query: 'Bun',
                    number: 2
                },
                success: successfulFetchData,
                dataType: 'json',
            })
    }, [])

    //fetch one recipe's detail information
    const fetchOneRecipeInformation = useCallback(async (id)=>{
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
        // console.log(retrievedData.results[0]);
        let dishes =retrievedData.results.map(result => fetchOneRecipeInformation(result.id));
        console.log(dishes);
        setData(dishes);
    }

    //function returns a detailed information of a food
    function successfulFetchInformation(retrievedData){
        let returnObject = {
            id: retrievedData.id,
            title: retrievedData.title,
            image: retrievedData.image,
            // price divided by 100 to get actual price
            pricePerServing: retrievedData.pricePerServing,
            diets: retrievedData.diets,
            summary: retrievedData.summary,
        }
        console.log(returnObject);
        return returnObject;
    }

    const list = <div className={`${styles.list}`}>
                    {/* list goes here */}
                    {data.map(dish => <CustomCard data = {dish}></CustomCard>)}
                    
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