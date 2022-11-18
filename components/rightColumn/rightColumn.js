import styles from "./rightColumn.module.scss";

const RightColumn = ({ title, subTitle, body, children }) => {
  return (
    <>
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
    </>
  );
};

export default RightColumn;
