import clsx from "clsx";
import Image from "next/image";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./rightColumn.module.scss";

const RightColumn = ({ title, centerHead, imageSrcPath, imageAlt, body, children }) => {
  return (
    <div className={styles.container}>
      {(title || (imageSrcPath && imageAlt)) && (
        <div
          className={clsx(styles.head, centerHead ? utilStyles.horizontallyCenterItem : undefined)}
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
          {title && !children && <h2 className={styles.title}>{title}</h2>}
          {title && children && <h3>{title}</h3>}
        </div>
      )}
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
