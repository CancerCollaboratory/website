import clsx from "clsx";
import { getCurrentNameOfMonth, getCurrentYear } from "../../lib/functions/timeValues";
import styles from "./list.module.scss";

const List = ({ title, body }) => {
  return (
    <div className={styles.listContainer}>
      {title && (
        <div className={styles.listHeadContainer}>
          <p className={styles.listHeadTitle}>
            {title}
            <span>
              {getCurrentNameOfMonth()} {getCurrentYear()}
            </span>
          </p>
        </div>
      )}
      {body && (
        <ul className={styles.listBlock}>
          {body.map((item, index) => (
            <li
              className={clsx(
                styles.listItem,
                item.stat?.lastStatInSubBlock
                  ? styles.lastStatItemBackground
                  : item.stat?.firstStatInSubBlock
                  ? styles.firstStatItemBackground
                  : item.hasBackgroundColor
                  ? styles.secondListItemBackground
                  : undefined
              )}
              key={index}
            >
              {item.stat && (
                <>
                  <h3 className={styles.listItemTitle}>{item.stat.title}</h3>
                  <p className={styles.listItemSubTitle}>{item.stat.subTitle}</p>
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
