import styles from "./card.module.scss";

export default function Card({ children }) {
  return <div className={styles.cardItem}>{children}</div>;
}
