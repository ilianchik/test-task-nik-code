"use client";

import Map from "@/components/map/Map";
import { getCityInfo, getCityPicture } from "@/lib/api";
import { cityDetails } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

export default function CityPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const [cityInfo, setCityInfo] = useState<cityDetails>(null);
  const [cityPicture, setCityPicture] = useState<string>("");

  useEffect(() => {
    const fetchCityData = async () => {
      const info = await getCityInfo(id);
      setCityInfo(info);
      if (info) {
        const picture = await getCityPicture(info.city);
        setCityPicture(picture);
      }
    };

    fetchCityData();
  }, [id]);

  if (!cityInfo) {
    return <div>Loading...</div>;
  }

  const position: [number, number] = [cityInfo.latitude, cityInfo.longitude];

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push("/")}
        type="button"
      >
        &larr; Home page
      </button>
      <Image
        src={cityPicture || "/placeholder.svg"}
        alt={cityInfo.city || "city"}
        width={200}
        height={200}
      />
      <h1>City name: {cityInfo.city}</h1>
      <p>Country name: {cityInfo.country}</p>
      <p>City population: {cityInfo.population}</p>
      <p>
        Elevation meters:{" "}
        {cityInfo.elevationMeters || cityInfo.elevationMeters === 0
          ? cityInfo.elevationMeters
          : "No info"}
      </p>
      <Map position={position} />
    </div>
  );
}
