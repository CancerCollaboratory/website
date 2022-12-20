import clsx from "clsx";
import Image from "next/image";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({
  megaTitle,
  title,
  isSmallTitle,
  centerHead,
  imageSrcPath,
  imageAlt,
  body,
  styleBodyAlignment,
  children,
}) => {
  return (
    <div className={styles.container}>
      {megaTitle && (
        <h1 className={clsx(styles.megaTitle, utilStyles.defaultElementMarginBottom)}>
          {megaTitle.map((item, index) => (
            <span className={item.isMainSubTitle ? styles.mainSubTitle : undefined} key={index}>
              {item.subTitle}
            </span>
          ))}
        </h1>
      )}
      {(title || (imageSrcPath && imageAlt)) && (
        <div
          className={clsx(
            styles.head,
            utilStyles.defaultElementMarginBottom,
            centerHead ? utilStyles.horizontallyCenterItem : undefined
          )}
        >
          {imageSrcPath && imageAlt && (
            <Image
              src={imageSrcPath}
              alt={imageAlt}
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
      {body?.map(
        (item, index) =>
          item.text && (
            <div
              className={clsx(
                !item.isLastText
                  ? megaTitle
                    ? clsx(styles.introBody, utilStyles.defaultElementMarginBottom)
                    : clsx(
                        utilStyles.defaultElementMarginBottom,
                        utilStyles.embeddedParagraphLineHeight
                      )
                  : megaTitle
                  ? styles.introBody
                  : utilStyles.embeddedParagraphLineHeight,
                styleBodyAlignment
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

export default LeftColumn;
