import clsx from "clsx";
import Image from "next/image";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./rightColumn.module.scss";

const RightColumn = ({ title, subTitle, centerHead, imageSrcPath, imageAlt, body, children }) => {
  return (
    <div className={styles.container}>
      {(title || (imageSrcPath && imageAlt)) && (
        <div
          className={clsx(
            styles.head,
            centerHead ? utilStyles.horizontallyCenterItem : undefined,
            !subTitle ? styles.headMargin : undefined
          )}
        >
          {imageSrcPath && imageAlt && (
            <Image
              src={imageSrcPath}
              alt={imageAlt}
              className={styles.image}
              quality={100}
              width={62}
              height={62}
            />
          )}
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>
      )}
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
      {body?.map(
        (item, index) =>
          item.text && (
            <div
              className={clsx(
                !item.isLastText ? styles.bodyText : styles.lastBodyText,
                utilStyles.commonAnchor
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
