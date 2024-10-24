import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4 className={styles.footerText}> Movie Explorer</h4>
      {/* <h4> &copy; All rights reserved</h4> */}
    </div>
  );
};
export default Footer;
