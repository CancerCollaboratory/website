import clsx from "clsx";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import Image from "next/image";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({ title, imageSrcPath, imageAlt, body, children }) => {
  return (
    <div className={styles.container}>
      {(title || imageSrcPath) && (
        <div className={clsx(styles.head, !imageSrcPath ? styles.title : undefined)}>
          {imageSrcPath && (
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
              className={clsx(!item.isLastText ? styles.bodyText : styles.lastBodyText)}
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
