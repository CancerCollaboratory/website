import clsx from "clsx";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({ title, centerTitle, imageSrcPath, imageAlt, body, children }) => {
  return (
    <div className={styles.container}>
      {(title || (imageSrcPath && imageAlt)) && (
        <div
          className={clsx(styles.head, centerTitle ? utilStyles.horizontallyCenterItem : undefined)}
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
          {title && <h2>{title}</h2>}
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

export default LeftColumn;
