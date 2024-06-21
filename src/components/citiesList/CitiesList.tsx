"use client";
import React, { useState } from "react";
import styles from "./CitiesList.module.scss";
import { city } from "@/types/types";
import CityCard from "../cityCard/CityCard";
import SearchInput from "../searchInput/SearchInput";
import SortDropdown from "../sortDropdown/SortDropdown";

export default function CitiesList({ cities }: { cities: city[] }) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const filteredCities = cities
    .filter((city) => {
      const matchesSearchTerm = city.city
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesSearchTerm;
    })
    .sort((cityA, cityB) => {
      if (sortBy === "populationAsc") {
        return cityA.population - cityB.population;
      } else if (sortBy === "cityNameAsc") {
        return cityA.city.localeCompare(cityB.city);
      } else if (sortBy === "countryNameAsc") {
        return cityA.country.localeCompare(cityB.country);
      } else {
        return 0;
      }
    });

  return (
    <div className={styles.container}>
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />

      <ul className={styles.list}>
        {filteredCities.map((city: city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
}
