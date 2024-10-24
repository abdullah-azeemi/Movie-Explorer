import "./App.css";
import Header from "./components/header";
import MovieList from "./components/movieList";
import Footer from "./components/footer";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <MovieList></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;
