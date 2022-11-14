import clsx from "clsx";
import styles from "./statGrid.module.scss";

const StatGrid = ({ title, body }) => {
  return (
    <div className={styles.statGridContainer}>
      {title && (
        <div className={styles.statHeadContainer}>
          <p className={styles.statGridTitle}>{title}</p>
        </div>
      )}
      {body && (
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
              {item.title && <h3 className={styles.statTitle}>{item.title}</h3>}
              {item.subTitle && <p className={styles.statSubTitle}>{item.subTitle}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatGrid;
