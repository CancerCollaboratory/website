import styles from "./jumbotron.module.scss";

const Jumbotron = ({ data }) => {
  return (
    <div className={styles.jumbotronContainer}>
      <h1 className={styles.jumbotronTitle}>{data.jumbotron.title}</h1>
      <p className={styles.jumbotronBody}>{data.jumbotron.body}</p>
    </div>
  );
};

export default Jumbotron;
