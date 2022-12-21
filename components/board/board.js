import clsx from "clsx";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./board.module.scss";

const Board = ({ title, titleLink, isTitleLinkExternal, caption, styleBackground }) => {
  if (!title || !caption) {
    return null;
  } else {
    return (
      <div className={clsx(styles.container, styleBackground)}>
        {!titleLink && <p className={styles.title}>{title}</p>}
        {titleLink && (
          <CustomLink
            label={title}
            link={titleLink}
            isLinkExternal={isTitleLinkExternal}
            styleLabel={clsx(styles.titleLink, utilStyles.commonAnchor)}
          />
        )}
        <p className={styles.caption}>{caption}</p>
      </div>
    );
  }
};

export default Board;
