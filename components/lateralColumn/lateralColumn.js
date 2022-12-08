import clsx from "clsx";
import Image from "next/image";
import Column from "../column/column";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({
  title,
  titleImageSrcPath,
  titleImageAlt,
  leftColumn,
  rightColumn,
  styleBackground,
  hasBorderBottom,
  styleColumnBorder,
  styleColumnAlignment,
}) => {
  if (!leftColumn || !rightColumn) {
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
        {(title || (titleImageSrcPath && titleImageAlt)) && (
          <div
            className={clsx(
              styles.head,
              !titleImageSrcPath || !titleImageAlt ? utilStyles.centerItem : undefined
            )}
          >
            {titleImageSrcPath && titleImageAlt && (
              <Image
                src={titleImageSrcPath}
                alt={titleImageAlt}
                className={styles.titleImage}
                quality={100}
                width={62}
                height={62}
              />
            )}
            {title && <h2>{title}</h2>}
          </div>
        )}
        <div className={clsx(styles.innerContainer, styleColumnAlignment)}>
          <Column styleBorder={styleColumnBorder}>{leftColumn}</Column>
          <Column>{rightColumn}</Column>
        </div>
      </div>
    );
  }
};

export default LateralColumn;
