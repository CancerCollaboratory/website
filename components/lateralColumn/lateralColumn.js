import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ leftColumn, rightColumn }) => {
  return (
    <div className={styles.lateralColumnContainer}>
      <div className={styles.leftColumnContainer}>{leftColumn}</div>
      <div className={styles.rightColumnContainer}>{rightColumn}</div>
    </div>
  );
};

export default LateralColumn;
