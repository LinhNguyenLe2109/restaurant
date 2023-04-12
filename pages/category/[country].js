import React from "react";
import { useRouter } from "next/router";
import FoodList from "@/components/FoodList";
import styles from "../../styles/[country].module.css";

function CountryDishes() {
  const router = useRouter();
  const { country } = router.query;
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center w-100 mt-5`}
    >
      <h1 className={`${styles.heading} fs-1 rounded-4`}>{country} dishes</h1>
      <FoodList cuisine={country} />
    </div>
  );
}

export default CountryDishes;
