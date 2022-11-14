import Column from "../column/column";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ leftColumn, rightColumn }) => {
  return (
    <div className={styles.lateralColumnContainer}>
      {leftColumn && <Column styleColumn={styles.leftColumn}>{leftColumn}</Column>}
      {rightColumn && <Column styleColumn={styles.rightColumn}>{rightColumn}</Column>}
    </div>
  );
};

export default LateralColumn;
