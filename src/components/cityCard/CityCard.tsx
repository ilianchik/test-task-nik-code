import React from "react";
import styles from "./CityCard.module.scss";
import { city, cityDetails } from "@/types/types";
import { getCityPicture } from "@/lib/api";
import Image from "next/image";

export default async function CityCard({ city }: { city: city }) {
  const cityPicture = await getCityPicture(city?.city);

  return (
    <>
      <Image
        className={styles.image}
        src={cityPicture || "/city.jpg"}
        alt={city?.city || "city"}
        width={100}
        height={100}
      />
      <h1>City name: {city.city}</h1>
      <p>Country name: {city?.country}</p>
      <p>City population: {city?.population}</p>
    </>
  );
}
