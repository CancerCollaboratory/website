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
  styleColumnBorder,
  children,
}) => {
  if ((!leftColumn || !rightColumn) && !children) {
    return null;
  } else {
    const lateralContent = !children && (
      <>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.innerContainer}>
          <Column styleColumn={styleColumnBorder}>{leftColumn}</Column>
          <Column>{rightColumn}</Column>
        </div>
      </>
    );

    const content = children || lateralContent;

    return (
      <div
        className={clsx(
          styles.container,
          utilStyles.outerContainer,
          hasBorderBottom ? utilStyles.containerBorderBottom : undefined,
          styleBackground
        )}
      >
        {content}
      </div>
    );
  }
};

export default LateralColumn;
