import clsx from "clsx";
import ResourceCardLayout from "../resourceCardLayout/resourceCardLayout";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./resourceSection.module.scss";

const ResourceSection = ({
  title,
  cards,
  caption,
  isCaptionLinkExternal,
  hasBorderBottom,
  hasBackground,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.sectionContainer,
        utilStyles.outerContainer,
        hasBackground ? utilStyles.gradientBackgroundGray : undefined,
        hasBorderBottom ? utilStyles.containerBorderBottom : undefined,
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
      {children}
    </div>
  );
};

export default ResourceSection;
