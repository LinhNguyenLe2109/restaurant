import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import styles from './FoodList.module.css'
import $ from 'jquery';
import { useCallback } from 'react';
import CustomCard from '../UI/CustomCard';
import { useRef } from 'react';

function FoodList() {
    const firstTimeRun = useRef(false);
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "0ecccc5ef7754191ab8b6bd26d0dd5da";
    //fetch a list of dishes
    const fetchData = useCallback(async ()=>{
        const data = await $.ajax({
                url: "https://api.spoonacular.com/recipes/complexSearch", 
                data: {
                    apiKey: API_KEY, 
                    cuisine: 'Japanese',
                    // query: 'Bun',
                    number: 2
                },
                dataType: 'json',
            });
        let dishes = [];
        for(let i = 0; i < data.results.length; i++){
            await fetchOneRecipeInformation(data.results[i].id).then(info => dishes.push(info));
        }
        console.log(dishes);
        setData(dishes);
    })

    //fetch one recipe's detail information
    const fetchOneRecipeInformation = useCallback(async (id)=>{
        const data = await $.ajax({
                url: `https://api.spoonacular.com/recipes/${id}/information`, 
                data: {
                    apiKey: API_KEY, 
                    includeNutrition: false
                },
                dataType: 'json',
            })
        
        const dishInfo = {
            id: data.id,
            title: data.title,
            image: data.image,
            // price divided by 100 to get actual price
            pricePerServing: data.pricePerServing,
            diets: data.diets,
            summary: data.summary,
        }
        return dishInfo;
    })
    useEffect(()=>{
        if(!firstTimeRun.current){
            // let test;
            fetchData()//.then(data => test = data);
            // fetchData();
            // console.log(test);
            firstTimeRun.current = true;
        }
    });

    const list = <div className={`${styles.list}`}>
                    {/* list goes here */}
                    {data.map(dish => <CustomCard key ={dish.id} data = {dish}></CustomCard>)}
                    
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