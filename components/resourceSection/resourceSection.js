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
  if (!title || !cards) {
    return null;
  } else {
    return (
      <div
        className={clsx(
          styles.sectionContainer,
          utilStyles.outerContainerWidth,
          hasBackground ? utilStyles.gradientBackgroundGray : undefined,
          hasBorderBottom ? utilStyles.containerBorderBottom : undefined,
          caption ? styles.background : undefined
        )}
      >
        <h2>{title}</h2>
        <ResourceCardLayout cards={cards} />
        {caption && (
          <div className={clsx(styles.caption, utilStyles.commonAnchor)}>
            {renderData(caption, isCaptionLinkExternal ? insertLinkExternal : insertLinkInternal)}
          </div>
        )}
        {children}
      </div>
    );
  }
};

export default ResourceSection;
