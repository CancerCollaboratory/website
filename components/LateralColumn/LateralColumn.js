import Column from "../column/column";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ leftColumn, rightColumn }) => {
  return (
    <div className={styles.lateralColumnContainer}>
      {leftColumn && <Column>{leftColumn}</Column>}
      {rightColumn && <Column>{rightColumn}</Column>}
    </div>
  );
};

export default LateralColumn;
