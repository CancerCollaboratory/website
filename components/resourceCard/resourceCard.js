import clsx from "clsx";
import Image from "next/future/image";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import styles from "./resourceCard.module.scss";

const ResourceCard = ({ title, isTitleLinkExternal, bodyText, imageSrcPath, imageAlt }) => {
  return (
    <div className={clsx(styles.cardContainer)}>
      {imageSrcPath && (
        <Image
          src={imageSrcPath}
          alt={imageAlt}
          className={styles.image}
          priority={false}
          width={58}
          height={58}
          quality={100}
        />
      )}
      {(title || bodyText) && (
        <div className={styles.cardContent}>
          {title && (
            <div className={styles.title}>
              {renderData(
                title,
                isTitleLinkExternal === "true" ? insertLinkExternal : insertLinkInternal
              )}
            </div>
          )}
          {bodyText && <p className={styles.bodyText}>{bodyText}</p>}
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
