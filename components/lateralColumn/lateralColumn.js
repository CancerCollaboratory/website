import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ data }) => {
  return (
    <>
      <div className={styles.lateralColumnContainer}>
        <div className={styles.leftColumnContainer}>
          <div className={styles.leftColumnHeader}>
            <h1 className={styles.leftColumnTitle}>{data.lateralColumn.leftColumn.title}</h1>
          </div>
          <p className={styles.leftColumnBody}>{data.lateralColumn.leftColumn.body}</p>
        </div>
        <div className={styles.rightColumnContainer}>
          <div className={styles.rightColumnHeader}>
            <h1 className={styles.rightColumnTitle}>{data.lateralColumn.rightColumn.title}</h1>
            <h2 className={styles.rightColumnSubTitle}>
              {data.lateralColumn.rightColumn.subTitle}
            </h2>
          </div>
          <div className={styles.rightColumnBody}>{data.lateralColumn.rightColumn.body}</div>
        </div>
      </div>
    </>
  );
};

export default LateralColumn;
