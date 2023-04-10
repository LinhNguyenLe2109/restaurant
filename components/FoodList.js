import React, { useState, useEffect, useCallback, useRef } from "react";
import CustomCard from "./CustomCard";
import $ from "jquery";
import styles from "../styles/FoodList.module.css";
import { Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import useSWR from "swr";

function FoodList(props) {
  const [isLoading, setIsLoading] = useState(true);

  let arrayList = []

  const listOfDishesFetcher = (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.results.map((record) => record.id)).then(() => setIsLoading(false));

  const listOfDetailedDishesDataFetcher = (urls) =>
    Promise.all(urls.map((url) => fetch(url))).then((responses) =>
      Promise.all(responses.map((res) => res.json())).then((records) =>
        records.map((record) => {
          const dishInfo = {
            id: record.id,
            title: record.title,
            image: record.image,
            // price divided by 100 to get actual price
            pricePerServing: record.pricePerServing,
            diets: record.diets,
            summary: record.summary,
          };
          return dishInfo;
        })
      )
    ).then(() => setIsLoading(false));

  //fetch a list of dishes
  const { data: listOfDishesData, error: listOfDishesError } = useSWR(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=${props.cuisine}&number=2`,
    listOfDishesFetcher
  );
  if (listOfDishesData) {
    arrayList = listOfDishesData.map(
      (dishID) =>
        `https://api.spoonacular.com/recipes/${dishID}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    
  }
  console.log(listOfDishesData)
  const { data: listOfDetailedDishesData, error: listOfDetailedDishesError } =
  useSWR(arrayList, listOfDetailedDishesDataFetcher, {
    dependsOn: [listOfDishesData],
  });

  const list = (
    <div className={`${styles.list} d-flex flex-wrap justify-content-evenly`}>
      {/* list goes here */}
      {listOfDetailedDishesData && listOfDetailedDishesData.map((dish) => (
        <CustomCard
          key={dish.id}
          className="mx-1 my-2"
          data={dish}
        ></CustomCard>
      ))}
    </div>
  );

  const loadingContent = (
    <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p>The menu is loading</p>
    </div>
  );
  return (
    <React.Fragment>
      <div className={`${styles.intro}`}>
        <h2 className="fs-2">{props.foodCategory}</h2>
        <p className="fs-5">{props.foodCatDesc}</p>
      </div>
      {!isLoading && list}
      {isLoading && loadingContent}
    </React.Fragment>
  );
}

export default FoodList;
