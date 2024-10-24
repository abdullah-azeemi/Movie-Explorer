import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Movie Explorer</h3>
      <a href="#">Home</a>
      <a href="#">Movie Details</a>
      <a href="#">Favourite</a>
    </div>
  );
};
export default Header;
