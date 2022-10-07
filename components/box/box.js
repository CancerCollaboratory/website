import styles from "./box.module.scss";

export default function Box({ children }) {
  return <div className={styles.boxItem}>{children}</div>;
}
