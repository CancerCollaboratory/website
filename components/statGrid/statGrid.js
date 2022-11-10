import clsx from "clsx";
import { getCurrentMonth, getCurrentYear } from "../../lib/functions/timeValue";
import styles from "./statGrid.module.scss";

const StatGrid = ({ statGridTitle, statGridBody }) => {
  return (
    <div className={styles.statGridContainer}>
      {statGridTitle && (
        <div className={styles.statHeadContainer}>
          <p className={styles.statGridTitle}>
            {statGridTitle}
            <span>
              {getCurrentMonth()} {getCurrentYear()}
            </span>
          </p>
        </div>
      )}
      {statGridBody && (
        <ul className={styles.statGridBlock}>
          {statGridBody.map((item, index) => (
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
