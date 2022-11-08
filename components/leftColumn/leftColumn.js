import clsx from "clsx";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({ title, styleImage, body, children }) => {
  return (
    <>
      {title && <h1 className={clsx(styles.title, styleImage)}>{title}</h1>}
      {body?.map((item, index) => (
        <p className={styles.bodyText} key={index}>
          {item.text}
        </p>
      ))}
      {children}
    </>
  );
};

export default LeftColumn;
