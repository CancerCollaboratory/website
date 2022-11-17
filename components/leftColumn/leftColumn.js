import clsx from "clsx";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({ title, styleTitleImage, body, children }) => {
  return (
    <>
      {title && <h2 className={clsx(styles.title, styleTitleImage)}>{title}</h2>}
      {body?.map(
        (item, index) =>
          item.text && (
            <p className={styles.bodyText} key={index}>
              {item.text}
            </p>
          )
      )}
      {children}
    </>
  );
};

export default LeftColumn;
