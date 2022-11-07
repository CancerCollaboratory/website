import clsx from "clsx";
import { getCurrentNameOfMonth, getCurrentYear } from "../../lib/functions/timeValues";
import styles from "./list.module.scss";

const List = ({ data }) => {
  return (
    <div className={styles.listContainer}>
      {data.listHead?.title && (
        <div className={styles.listHeadContainer}>
          <p className={styles.listHeadTitle}>
            {data.listHead.title}
            <span>
              {getCurrentNameOfMonth()} {getCurrentYear()}
            </span>
          </p>
        </div>
      )}
      {data.listBody && (
        <ul className={styles.listBlock}>
          {data.listBody.map((item, index) => (
            <li
              className={clsx(
                styles.listItem,
                item.stats?.lastStatInSubBlock?.hasBackgroundColor
                  ? styles.lastStatItemBackground
                  : item.stats?.firstStatInSubBlock?.hasBackgroundColor
                  ? styles.firstStatItemBackground
                  : item.secondItemInSubBlock?.hasBackgroundColor
                  ? styles.secondListItemBackground
                  : undefined
              )}
              key={index}
            >
              {item.stats && (
                <>
                  <h3 className={styles.listItemTitle}>{item.stats.title}</h3>
                  <p className={styles.listItemSubTitle}>{item.stats.subTitle}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
