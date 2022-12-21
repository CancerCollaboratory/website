import clsx from "clsx";
import Image from "next/image";
import Column from "../column/column";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({
  title,
  isSmallTitle,
  titleImageSrcPath,
  titleImageAlt,
  leftColumn,
  rightColumn,
  isAChild,
  hasBackground,
  hasBorderBottom,
  hasColumnBorder,
  styleColumnAlignment,
}) => {
  if (!leftColumn || !rightColumn) {
    return null;
  } else {
    return (
      <div
        className={clsx(
          styles.container,
          !isAChild ? utilStyles.outerContainerWidth : utilStyles.maxWidth,
          hasBackground ? utilStyles.gradientBackgroundGray : undefined,
          hasBorderBottom ? utilStyles.containerBorderBottom : undefined
        )}
      >
        {(title || (titleImageSrcPath && titleImageAlt)) && (
          <div
            className={clsx(
              styles.head,
              (!titleImageSrcPath || !titleImageAlt) && !isAChild
                ? utilStyles.horizontallyCenterItem
                : undefined
            )}
          >
            {titleImageSrcPath && titleImageAlt && (
              <Image
                src={titleImageSrcPath}
                alt={titleImageAlt}
                className={!isSmallTitle ? utilStyles.titleIcon : utilStyles.smallTitleIcon}
                quality={100}
                width={62}
                height={62}
              />
            )}
            {title && (
              <h2
                className={clsx(
                  utilStyles.defaultElementLineHeight,
                  isSmallTitle ? utilStyles.smallh2 : undefined
                )}
              >
                {title}
              </h2>
            )}
          </div>
        )}
        <div className={clsx(utilStyles.lateralColumnInnerContainer, styleColumnAlignment)}>
          <Column styleBorder={clsx(hasColumnBorder ? utilStyles.columnBorder : undefined)}>
            {leftColumn}
          </Column>
          <Column>{rightColumn}</Column>
        </div>
      </div>
    );
  }
};

export default LateralColumn;
