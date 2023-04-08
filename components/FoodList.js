import React, { useState, useEffect, useCallback, useRef } from "react";
import CustomCard from "../UI/CustomCard";
import $ from "jquery";
import styles from "./FoodList.module.css";

function FoodList(props) {
  const firstTimeRun = useRef(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = "0ecccc5ef7754191ab8b6bd26d0dd5da";
  //fetch a list of dishes
  const fetchData = useCallback(async (cuisineType) => {
    setIsLoading(true);
    const data = await $.ajax({
      url: "https://api.spoonacular.com/recipes/complexSearch",
      data: {
        apiKey: API_KEY,
        cuisine: cuisineType,
        number: 10,
      },
      dataType: "json",
    });
    let dishes = [];
    for (let i = 0; i < data.results.length; i++) {
      await fetchOneRecipeInformation(data.results[i].id).then((info) =>
        dishes.push(info)
      );
    }
    setData(dishes);
    setIsLoading(false);
  });

  //fetch one recipe's detail information
  const fetchOneRecipeInformation = useCallback(async (id) => {
    const data = await $.ajax({
      url: `https://api.spoonacular.com/recipes/${id}/information`,
      data: {
        apiKey: API_KEY,
        includeNutrition: false,
      },
      dataType: "json",
    });

    const dishInfo = {
      id: data.id,
      title: data.title,
      image: data.image,
      // price divided by 100 to get actual price
      pricePerServing: data.pricePerServing,
      diets: data.diets,
      summary: data.summary,
    };
    return dishInfo;
  });
  useEffect(() => {
    if (!firstTimeRun.current) {
      fetchData(props.cuisine);
      firstTimeRun.current = true;
    }
  });

  const list = (
    <div className={`${styles.list} d-flex flex-wrap justify-content-evenly`}>
      {/* list goes here */}
      {data.map((dish) => (
        <CustomCard
          addItem={props.addItem}
          key={dish.id}
          className="mx-1 my-2"
          data={dish}
        ></CustomCard>
      ))}
    </div>
  );
  return (
    <React.Fragment>
      <div className={`${styles.intro}`}>
        <h2 className="fs-2">{props.foodCategory}</h2>
        <p className="fs-5">{props.foodCatDesc}</p>
      </div>
      {!isLoading && list}
      {isLoading && <p>The menu is loading</p>}
    </React.Fragment>
  );
}

export default FoodList;
