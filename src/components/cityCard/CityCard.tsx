import React from "react";
import styles from "./CityCard.module.scss";
import { city, cityDetails } from "@/types/types";
import { getCityInfo, getCityPicture } from "@/lib/api";
import Image from "next/image";

export default async function CityCard({ city }: { city: city }) {
  const cityDetails: cityDetails = await getCityInfo(city?.wikiDataId);
  const cityPicture = await getCityPicture(cityDetails?.city);

  return (
    <>
      <Image
        className={styles.image}
        src={cityPicture || "/city.jpg"}
        alt={cityDetails?.city || "city"}
        width={100}
        height={100}
      />
      <h1>{cityDetails?.city}</h1>
      <p>{cityDetails?.country}</p>
    </>
  );
}
