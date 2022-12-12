import clsx from "clsx";
import ResourceCardLayout from "../resourceCardLayout/resourceCardLayout";
import NavLine from "../navLine/navLine";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./resourceSection.module.scss";

const ResourceSection = ({ title, cards, caption, isCaptionLinkExternal, navLinks }) => {
  return (
    <div
      className={clsx(
        styles.sectionContainer,
        utilStyles.outerContainer,
        utilStyles.containerBorderBottom,
        caption && styles.background
      )}
    >
      {title && <h2>{title}</h2>}
      {cards && <ResourceCardLayout cards={cards} />}
      {caption && (
        <div className={clsx(styles.caption, utilStyles.commonAnchor)}>
          {renderData(
            caption,
            isCaptionLinkExternal === "ture" ? insertLinkExternal : insertLinkInternal
          )}
        </div>
      )}
      {navLinks && <NavLine links={navLinks} />}
    </div>
  );
};

export default ResourceSection;
