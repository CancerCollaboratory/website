import clsx from "clsx";
import styles from "./column.module.scss";

const Column = ({ styleBorder, children }) => {
  if (!children) {
    return null;
  } else {
    return <div className={clsx(styles.container, styleBorder)}>{children}</div>;
  }
};

export default Column;
