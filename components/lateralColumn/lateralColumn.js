import clsx from "clsx";
import Column from "../column/column";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ leftColumn, rightColumn, styleBackground, styleColumnBorder }) => {
  return (
    <div
      className={clsx(styles.lateralColumnContainer, utilStyles.outerContainer, styleBackground)}
    >
      {leftColumn && <Column styleColumn={styleColumnBorder}>{leftColumn}</Column>}
      {rightColumn && <Column>{rightColumn}</Column>}
    </div>
  );
};

export default LateralColumn;
