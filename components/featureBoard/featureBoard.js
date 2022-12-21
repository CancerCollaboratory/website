import clsx from "clsx";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./featureBoard.module.scss";

const FeatureBoard = ({ boards }) => {
  return (
    <div className={styles.container}>
      {boards?.map((board, index) => {
        if (!board.title || !board.caption) {
          return null;
        } else {
          return (
            <div
              className={clsx(
                styles.innerContainer,
                board.hasBackground ? styles.background : undefined,
                index % 2 !== 0 ? styles.addBackground : undefined
              )}
              key={index}
            >
              {!board.titleLink && <p className={styles.title}>{board.title}</p>}
              {board.titleLink && (
                <CustomLink
                  label={board.title}
                  link={board.titleLink}
                  isLinkExternal={board.isTitleLinkExternal}
                  styleLabel={clsx(styles.titleLink, utilStyles.commonAnchor)}
                />
              )}
              <p className={styles.caption}>{board.caption}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FeatureBoard;
