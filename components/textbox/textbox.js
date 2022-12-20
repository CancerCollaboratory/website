import clsx from "clsx";
import Image from "next/image";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./textbox.module.scss";

const Textbox = ({
  title,
  titleImageSrcPath,
  titleImageAlt,
  body,
  isInLateralColumn,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        !isInLateralColumn
          ? clsx(
              utilStyles.outerContainerVerticalPadding,
              utilStyles.innerContainerHorizontalPadding
            )
          : undefined
      )}
    >
      {(title || (titleImageSrcPath && titleImageAlt)) && (
        <div className={clsx(styles.head, utilStyles.defaultElementMarginBottom)}>
          {titleImageSrcPath && titleImageAlt && (
            <Image
              src={titleImageSrcPath}
              alt={titleImageAlt}
              className={utilStyles.smallTitleIcon}
              quality={100}
              width={62}
              height={62}
            />
          )}
          {title && <h2 className={utilStyles.defaultElementLineHeight}>{title}</h2>}
        </div>
      )}
      {body?.map(
        (item, index) =>
          item.text && (
            <div
              className={clsx(
                !item.isLastText
                  ? clsx(
                      utilStyles.defaultElementMarginBottom,
                      utilStyles.embeddedParagraphLineHeight
                    )
                  : utilStyles.embeddedParagraphLineHeight,
                item.isLinkExternal ? utilStyles.commonAnchor : undefined
              )}
              key={index}
            >
              {renderData(item.text, item.isLinkExternal ? insertLinkExternal : insertLinkInternal)}
            </div>
          )
      )}
      {children}
    </div>
  );
};

export default Textbox;
