import styles from "./rightColumn.module.scss";

const RightColumn = ({ title, subTitle, body, children }) => {
  return (
    <>
      {title && <h1 className={styles.title}>{title}</h1>}
      {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}
      {body?.map((item, index) => (
        <p className={styles.bodyText} key={index}>
          {item.text}
        </p>
      ))}
      {children}
    </>
  );
};

export default RightColumn;
