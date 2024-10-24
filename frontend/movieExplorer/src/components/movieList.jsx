import MovieItem from "./movieItem.jsx";
const MovieList = () => {
  const movies = ["batman", "spidermonkey"];

  return (
    <div className="movieList">
      {movies.map((title) => (
        <MovieItem key={title.id} title={title} rating={5}></MovieItem>
      ))}
    </div>
  );
};
export default MovieList;
