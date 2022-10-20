import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerHeadContainer}></div>
      <div className={styles.footerTailContainer}></div>
    </div>
  );
};

export default Footer;
