import clsx from "clsx";
import Board from "../board/board";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./softwareBox.module.scss";

const SoftwareBox = ({ title, boards, hasBackground, hasBorderBottom }) => {
  if (!title || !boards) {
    return null;
  } else {
    return (
      <div
        className={clsx(
          styles.container,
          utilStyles.maxWidth,
          utilStyles.outerContainerVerticalPadding,
          hasBackground ? utilStyles.gradientBackgroundGray : undefined,
          hasBorderBottom ? utilStyles.containerBorderBottom : undefined
        )}
      >
        <h2 className={utilStyles.defaultElementLineHeight}>{title}</h2>
        <div className={clsx(styles.innerContainer, utilStyles.maxWidth)}>
          {boards.map((board, index) => {
            if (!board.title || !board.caption) {
              return null;
            } else {
              return (
                <div
                  className={clsx(styles.block, board.isLastBoard ? styles.blockMargin : undefined)}
                  key={index}
                >
                  <Board
                    title={board.title}
                    titleLink={board.titleLink}
                    isTitleLinkExternal={board.isTitleLinkExternal}
                    caption={board.caption}
                    styleBackground={
                      board.hasBackground
                        ? utilStyles.boardBackground
                        : hasBackground
                        ? utilStyles.resetBackgroundColor
                        : undefined
                    }
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
};

export default SoftwareBox;
