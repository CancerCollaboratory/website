import clsx from "clsx";
import styles from "./featureBoard.module.scss";

const FeatureBoard = ({ boards }) => {
  return (
    <div className={styles.container}>
      {boards.map((board, index) => {
        if (!board.title || !board.caption) {
          return null;
        } else {
          return (
            <div
              className={clsx(
                styles.innerContainer,
                board.hasBackground ? styles.background : undefined
              )}
              key={index}
            >
              <p className={styles.title}>{board.title}</p>
              <p className={styles.caption}>{board.caption}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FeatureBoard;
