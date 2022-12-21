import clsx from "clsx";
import Board from "../board/board";
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
            <div className={clsx(styles.innerContainer, utilStyles.outerBoardMargins)} key={index}>
              <Board
                title={board.title}
                titleLink={board.titleLink}
                isTitleLinkExternal={board.isTitleLinkExternal}
                caption={board.caption}
                styleBackground={clsx(
                  board.hasBackground ? utilStyles.boardBackground : undefined,
                  index % 2 !== 0 ? utilStyles.swapBoardBackground : undefined
                )}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default FeatureBoard;
