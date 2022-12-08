import clsx from "clsx";
import Image from "next/image";
import IconArrow from "../../public/assets/resourceCard/icon-arrow-gray.svg";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import styles from "./resourceCard.module.scss";

const ResourceCard = ({
  title,
  isTitleLinkExternal,
  bodyText,
  imageSrcPath,
  imageAlt,
  isLastCard,
}) => {
  return (
    <div className={clsx(styles.cardContainer, !isLastCard ? styles.cardMargin : undefined)}>
      {imageSrcPath && (
        <Image
          src={imageSrcPath}
          alt={imageAlt}
          className={styles.mainImage}
          quality={100}
          width={57}
          height={57}
        />
      )}
      {(title || bodyText) && (
        <div className={styles.cardContent}>
          {title && (
            <div className={styles.title}>
              {renderData(title, isTitleLinkExternal ? insertLinkExternal : insertLinkInternal)}
              <Image src={IconArrow} alt={"Icon"} className={styles.titleIcon} quality={100} />
            </div>
          )}
          {bodyText && <p className={styles.bodyText}>{bodyText}</p>}
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
