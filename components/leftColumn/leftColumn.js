import clsx from "clsx";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({ title, styleImage, body, children }) => {
  return (
    <>
      {title && (
        <div className={clsx(styles.header, styleImage)}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      )}
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
