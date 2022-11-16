import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import styles from "./resourceSection.module.scss";

const ResourceSection = ({ title, bodyText, isBodyTextLinkExternal }) => {
  return (
    <div className={styles.sectionContainer}>
      {title && <h1>{title}</h1>}
      {bodyText && (
        <div>
          {renderData(
            bodyText,
            isBodyTextLinkExternal === "ture" ? insertLinkExternal : insertLinkInternal
          )}
        </div>
      )}
    </div>
  );
};

export default ResourceSection;
