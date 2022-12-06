import clsx from "clsx";
import Column from "../column/column";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({
  title,
  leftColumn,
  rightColumn,
  styleBackground,
  hasBorderBottom,
  styleColumn,
}) => {
  if (!leftColumn && !rightColumn) {
    return null;
  } else {
    return (
      <div
        className={clsx(
          styles.container,
          utilStyles.outerContainer,
          hasBorderBottom ? utilStyles.containerBorderBottom : undefined,
          styleBackground
        )}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.innerContainer}>
          {leftColumn && <Column styleColumn={styleColumn}>{leftColumn}</Column>}
          {rightColumn && <Column>{rightColumn}</Column>}
        </div>
      </div>
    );
  }
};

export default LateralColumn;
