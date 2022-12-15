import clsx from "clsx";
import Image from "next/image";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({ megaTitle, title, centerHead, imageSrcPath, imageAlt, body, children }) => {
  return (
    <div className={styles.container}>
      {megaTitle && (
        <h1 className={styles.megaTitle}>
          {megaTitle.map((item, index) => (
            <span className={item.isMainSubTitle ? styles.mainSubTitle : undefined} key={index}>
              {item.subTitle}
            </span>
          ))}
        </h1>
      )}
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
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>
      )}
      {body?.map(
        (item, index) =>
          item.text && (
            <div
              className={clsx(
                !item.isLastText
                  ? megaTitle
                    ? styles.introBody
                    : styles.bodyText
                  : megaTitle
                  ? styles.lastIntroBody
                  : styles.lastBodyText,
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
