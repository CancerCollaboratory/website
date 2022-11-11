import clsx from "clsx";
import styles from "./column.module.scss";

const Column = ({ styleColumn, children }) => {
  return <div className={clsx(styles.columnContainer, styleColumn)}>{children}</div>;
};

export default Column;
