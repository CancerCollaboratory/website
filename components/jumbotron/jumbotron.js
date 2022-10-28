import styles from "./jumbotron.module.scss";

const Jumbotron = () => {
  return (
    <div className={styles.jumbotronContainer}>
      <h1 className={styles.jumbotronTitle}>About Us</h1>
      <p className={styles.jumbotronBodyText}>This is temporary text.</p>
    </div>
  );
};

export default Jumbotron;
