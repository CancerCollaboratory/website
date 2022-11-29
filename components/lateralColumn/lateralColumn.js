import clsx from "clsx";
import Column from "../column/column";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ title, leftColumn, rightColumn, styleBackground, styleColumnBorder }) => {
  if (!leftColumn || !rightColumn) {
    return null;
  } else {
    return (
      <div className={clsx(styles.container, utilStyles.outerContainer, styleBackground)}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.innerContainer}>
          <Column styleColumn={styleColumnBorder}>{leftColumn}</Column>
          <Column>{rightColumn}</Column>
        </div>
      </div>
    );
  }
};

export default LateralColumn;
