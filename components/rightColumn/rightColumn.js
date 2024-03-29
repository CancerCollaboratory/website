import clsx from "clsx";
import Image from "next/image";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./rightColumn.module.scss";

const RightColumn = ({
  title,
  centerHead,
  imageSrcPath,
  imageAlt,
  body,
  styleParagraphMarginBottom,
  children,
}) => {
  return (
    <div className={styles.container}>
      {(title || (imageSrcPath && imageAlt)) && (
        <div
          className={clsx(
            styles.head,
            body || children ? utilStyles.defaultElementMarginBottom : undefined,
            centerHead ? utilStyles.horizontallyCenterItem : undefined
          )}
        >
          {imageSrcPath && imageAlt && (
            <Image
              src={imageSrcPath}
              alt={imageAlt}
              className={utilStyles.titleIcon}
              quality={100}
              width={62}
              height={62}
            />
          )}
          {title && !children && (
            <h2 className={clsx(styles.title, utilStyles.defaultElementLineHeight)}>{title}</h2>
          )}
          {title && children && <h2>{title}</h2>}
        </div>
      )}
      {body?.map(
        (item, index) =>
          item.text && (
            <div
              className={clsx(
                !item.isLastText
                  ? clsx(
                      !styleParagraphMarginBottom
                        ? utilStyles.defaultElementMarginBottom
                        : styleParagraphMarginBottom,
                      utilStyles.embeddedParagraphLineHeight
                    )
                  : utilStyles.embeddedParagraphLineHeight
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

export default RightColumn;
