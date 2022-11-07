import styles from "./column.module.scss";

const Column = ({ children }) => {
  return <div className={styles.columnContainer}>{children}</div>;
};

export default Column;
