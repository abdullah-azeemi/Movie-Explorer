import styles from "./header.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import movieDetails from "../pages/movieDetails";
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Movie Explorer</h3>
      <a href="#">Home</a>
      <a href="/movieDetails">Movie Details</a>
      <a href="#">Favourite</a>

      <BrowserRouter></BrowserRouter>
    </div>
  );
};
export default Header;
