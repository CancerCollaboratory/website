import clsx from "clsx";
import Column from "../column/column";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ leftColumn, rightColumn, styleBackground }) => {
  return (
    <div className={clsx(styles.lateralColumnContainer, styleBackground)}>
      {leftColumn && <Column styleColumn={styles.leftColumn}>{leftColumn}</Column>}
      {rightColumn && <Column styleColumn={styles.rightColumn}>{rightColumn}</Column>}
    </div>
  );
};

export default LateralColumn;
