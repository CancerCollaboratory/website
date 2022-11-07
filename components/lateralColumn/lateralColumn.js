import Column from "../column/column";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ leftColumn, rightColumn }) => {
  return (
    <div className={styles.lateralColumnContainer}>
      <div className={styles.leftColumnContainer}>
        <Column>{leftColumn}</Column>
      </div>
      <div className={styles.rightColumnContainer}>
        <Column>{rightColumn}</Column>
      </div>
    </div>
  );
};

export default LateralColumn;
