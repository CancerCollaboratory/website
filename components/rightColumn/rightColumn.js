import clsx from "clsx";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./rightColumn.module.scss";

const RightColumn = ({ title, subTitle, body, children }) => {
  return (
    <div className={styles.container}>
      {title && (
        <h2 className={clsx(styles.title, !subTitle ? styles.titleMargin : undefined)}>{title}</h2>
      )}
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
      {body?.map(
        (item, index) =>
          item.text && (
            <div
              className={clsx(
                !item.isLastText ? styles.bodyText : styles.lastBodyText,
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

export default RightColumn;
