import styles from "./movieItem.module.css";
const MovieItem = ({ title, releaseDate, rating }) => {
  return (
    <div className={styles.movieItem}>
      <h3>Movie Title : {title} </h3>
      <h4>Release date : {releaseDate}</h4>
      <h4>Rating : {rating} </h4>
    </div>
  );
};
export default MovieItem;
