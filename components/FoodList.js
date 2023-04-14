import React, { useState, useEffect, useCallback, useRef } from "react";
import DishCard from "./DishCard";
import styles from "../styles/FoodList.module.css";
import { Spinner } from "react-bootstrap";
import useSWR from "swr";
import { useRouter } from "next/router";
function FoodList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  let arrayList = [];

  // todo
  const listOfDishesFetcher = (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.results.map((record) => record.id));

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
    );

  //fetch a list of dishes
  const { data: listOfDishesData, error: listOfDishesError } = useSWR(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=${props.cuisine}&number=10`,
    listOfDishesFetcher
  );

  if (listOfDishesData) {
    arrayList = listOfDishesData.map(
      (dishID) =>
        `https://api.spoonacular.com/recipes/${dishID}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
  }
  const { data: listOfDetailedDishesData, error: listOfDetailedDishesError } =
    useSWR(arrayList, listOfDetailedDishesDataFetcher, {
      dependsOn: [listOfDishesData],
    });

  useEffect(() => {
    if (!(listOfDishesError || listOfDetailedDishesError)) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [listOfDishesError, listOfDetailedDishesError]);

  if (listOfDishesError || listOfDetailedDishesError) {
    router.push("/error/402");
  }

  const list = (
    // <div
    //   className={`${styles.list} d-md-flex flex-wrap justify-content-evenly mt-4 mx-1 mx-md-5`}
    // >
    //   {/* list goes here */}
    //   {listOfDetailedDishesData &&
    //     listOfDetailedDishesData.map((dish) => (
    //       <DishCard key={dish.id} className="mx-1 my-2" data={dish}></DishCard>
    //     ))}
    // </div>
    // tailwind has the ability to do grid that looks much better
    <div className={`${styles.grid} mt-4 mx-1 mx-md-5`}>
      {/* list goes here */}
      {listOfDetailedDishesData &&
        listOfDetailedDishesData.map((dish) => (
          <DishCard key={dish.id} className="mx-1 my-2" data={dish}></DishCard>
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
      {!isLoading && list}
      {isLoading && loadingContent}
    </React.Fragment>
  );
}

export default FoodList;
