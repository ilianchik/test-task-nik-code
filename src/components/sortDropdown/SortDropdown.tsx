import React from "react";
import styles from "./SortDropdown.module.scss";

const SortDropdown = ({
  sortBy,
  onSortChange,
}: {
  sortBy: string;
  onSortChange: (value: string) => void;
}) => {
  const sortOptions = [
    { value: "", label: "Sort by..." },
    { value: "populationAsc", label: "Population (Low to High)" },
    { value: "cityNameAsc", label: "City Name (A to Z)" },
    { value: "countryNameAsc", label: "Country Name (A to Z)" },
  ];

  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className={styles.sortDropdown}
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortDropdown;
