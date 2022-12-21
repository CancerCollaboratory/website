import clsx from "clsx";
import Image from "next/image";
import IconArrow from "../../public/assets/resourceCard/icon-arrow-gray.svg";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./resourceCard.module.scss";

const ResourceCard = ({
  title,
  isTitleLinkExternal,
  bodyText,
  imageSrcPath,
  imageAlt,
  isLastCard,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.cardContainer,
        children ? styles.altCard : undefined,
        !isLastCard ? styles.cardMargin : undefined
      )}
    >
      {imageSrcPath && imageAlt && (
        <Image
          src={imageSrcPath}
          alt={imageAlt}
          className={styles.mainImage}
          quality={100}
          width={57}
          height={57}
        />
      )}
      {(title || bodyText || children) && (
        <div className={styles.cardContent}>
          {title && (
            <div className={clsx(styles.title, children ? styles.titleFont : undefined)}>
              {renderData(title, isTitleLinkExternal ? insertLinkExternal : insertLinkInternal)}
              <Image src={IconArrow} alt={"Icon"} className={styles.titleIcon} quality={100} />
            </div>
          )}
          {bodyText && <p className={styles.bodyText}>{bodyText}</p>}
          {children}
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
