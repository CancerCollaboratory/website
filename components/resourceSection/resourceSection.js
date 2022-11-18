import clsx from "clsx";
import CardLayout from "../cardLayout/cardLayout";
import NavLink from "../navLink/navLink";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import styles from "./resourceSection.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const ResourceSection = ({ title, cards, caption, isCaptionLinkExternal, navLinks }) => {
  return (
    <div
      className={clsx(
        styles.sectionContainer,
        utilStyles.outerContainer,
        caption && styles.background
      )}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      {cards && <CardLayout cards={cards} />}
      {caption && (
        <div className={styles.caption}>
          {renderData(
            caption,
            isCaptionLinkExternal === "ture" ? insertLinkExternal : insertLinkInternal
          )}
        </div>
      )}
      {navLinks && <NavLink links={navLinks} />}
    </div>
  );
};

export default ResourceSection;
