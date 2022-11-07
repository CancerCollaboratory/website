import Column from "../column/column";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ leftColumn, rightColumn }) => {
  return (
    <div className={styles.lateralColumnContainer}>
      <Column>{leftColumn}</Column>
      <Column>{rightColumn}</Column>
    </div>
  );
};

export default LateralColumn;
