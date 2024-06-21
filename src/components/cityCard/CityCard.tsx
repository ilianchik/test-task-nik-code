import React, { useState, useEffect } from "react";
import styles from "./CityCard.module.scss";
import { city } from "@/types/types";
import { getCityPicture } from "@/lib/api";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CityCard({ city }: { city: city }) {
  const [cityPicture, setCityPicture] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const fetchCityPicture = async () => {
      try {
        const picture = await getCityPicture(city?.city);
        setCityPicture(picture);
      } catch (error) {
        console.error("Error fetching city picture:", error);
      }
    };

    if (city?.city) {
      fetchCityPicture();
    }
  }, [city?.city]);

  return (
    <motion.li
      onClick={() => router.push(`/city/${city.id}`)}
      className={styles.listElement}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        className={styles.image}
        src={cityPicture || "/placeholder.svg"}
        alt={city?.city || "city"}
        width={100}
        height={100}
      />
      <h1>City name: {city.city}</h1>
      <p>Country name: {city?.country}</p>
      <p>City population: {city?.population}</p>
    </motion.li>
  );
}
