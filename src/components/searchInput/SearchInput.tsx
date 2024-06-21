import React from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = ({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}) => {
  return (
    <input
      type="text"
      placeholder="Search cities..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className={styles.searchInput}
    />
  );
};

export default SearchInput;
