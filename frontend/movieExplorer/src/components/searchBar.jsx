import { useState } from "react";
import styles from "./searchBar.module.css";
const SearchBar = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const handleSearch = () => {
    console.log(`Searching for Movie ${searchedMovie}`);
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search your movie"
          value={searchedMovie}
          onChange={(e) => setSearchedMovie(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
