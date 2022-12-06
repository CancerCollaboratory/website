import clsx from "clsx";
import styles from "./column.module.scss";

const Column = ({ styleColumn, children }) => {
  if (!children) {
    return null;
  } else {
    return <div className={clsx(styles.container, styleColumn)}>{children}</div>;
  }
};

export default Column;
