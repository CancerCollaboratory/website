import styles from "./404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.frame}>
      <h1 className={styles.errorTextLarge}>404</h1>
      <h2 className={styles.errorTextSmall}>Page Not Found</h2>
    </div>
  );
};

export default Custom404;
