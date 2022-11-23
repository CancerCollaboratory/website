import clsx from "clsx";
import Column from "../column/column";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ leftColumn, rightColumn, styleBackground }) => {
  return (
    <div
      className={clsx(styles.lateralColumnContainer, utilStyles.outerContainer, styleBackground)}
    >
      {leftColumn && <Column styleColumn={styles.leftColumn}>{leftColumn}</Column>}
      {rightColumn && <Column styleColumn={styles.rightColumn}>{rightColumn}</Column>}
    </div>
  );
};

export default LateralColumn;
