import "./App.css";
import Header from "./components/header";
import MovieList from "./components/movieList";
import Footer from "./components/footer";
import SearchBar from "./components/searchBar";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <div className={styles.listingCardContainer}>
        <MovieList></MovieList>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
