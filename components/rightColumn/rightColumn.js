import clsx from "clsx";
import styles from "./rightColumn.module.scss";

const RightColumn = ({ title, subTitle, body, styleColumn, children }) => {
  return (
    <div className={clsx(styles.container, styleColumn)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
      {body?.map(
        (item, index) =>
          item.text && (
            <p className={styles.bodyText} key={index}>
              {item.text}
            </p>
          )
      )}
      {children}
    </div>
  );
};

export default RightColumn;
