import clsx from "clsx";
import styles from "./statGrid.module.scss";

const StatGrid = ({ title, body }) => {
  if (!title || !body) {
    return null;
  } else {
    return (
      <div className={styles.statGridContainer}>
        <div className={styles.statHeadContainer}>
          <p className={styles.statGridTitle}>{title}</p>
        </div>
        <ul className={styles.statGridBlock}>
          {body.map((item, index) => (
            <li
              className={clsx(
                styles.statItem,
                item.subBlockA?.hasBackground
                  ? styles.backgroundStatA
                  : item.subBlockB?.hasBackground
                  ? styles.backgroundStatB
                  : item.hasBackground
                  ? styles.backgroundStat
                  : undefined
              )}
              key={index}
            >
              {item.title && <p className={styles.statTitle}>{item.title}</p>}
              {item.subTitle && <p className={styles.statSubTitle}>{item.subTitle}</p>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default StatGrid;
