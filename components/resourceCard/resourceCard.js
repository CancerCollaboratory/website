import clsx from "clsx";
import NavbarLink from "../navbarLink/navbarLink";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import styles from "./resourceCard.module.scss";

const ResourceCard = ({ title, isTitleLinkExternal, bodyText }) => {
  return (
    <div className={clsx(styles.cardContainer)}>
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
