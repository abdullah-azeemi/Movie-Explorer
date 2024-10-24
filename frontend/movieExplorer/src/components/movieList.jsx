import MovieItem from "./movieItem.jsx";
import styles from "./movieList.module.css";

const MovieList = () => {
  const movies = ["batman", "superman", "aquaman"];
  const movie = {
    title: "Batman",
    rating: "5.0",
    releaseDate: "20/10/20",
  };

  return (
    <div className={styles.movieList}>
      {movies.map((title) => (
        <MovieItem
          key={title.id}
          title={title}
          releaseDate={"10/10/20"}
          rating={5}
        ></MovieItem>
      ))}
      {/* <MovieItem {...movie}></MovieItem> */}
    </div>
  );
};
export default MovieList;
