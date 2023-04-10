import React from "react";
import { useRouter } from "next/router";
import FoodList from "@/components/FoodList";

function CountryDishes() {
  const router = useRouter();
  const { country } = router.query;
  console.log(country)
  return <FoodList cuisine = {country}/>;
}

export default CountryDishes;
