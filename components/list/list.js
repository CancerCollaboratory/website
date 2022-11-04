import { getCurrentNameOfMonth, getCurrentYear } from "../../lib/functions/timeValues";
import styles from "./list.module.scss";

const List = ({ data }) => {
  return (
    <div className={styles.listContainer}>
      {data.listHead?.title && (
        <p className={styles.listHeadTitle}>
          {data.listHead.title}
          <span>
            {getCurrentNameOfMonth()} {getCurrentYear()}
          </span>
        </p>
      )}
      {data.listBody && (
        <ul className={styles.listBlock}>
          {data.listBody.map((item, index) => (
            <li className={styles.listItem} key={index}>
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
