import { getCurrentNameOfMonth, getCurrentYear } from "../../lib/functions/timeValues";
import styles from "./list.module.scss";

const List = ({ data }) => {
  return (
    <div className={styles.listContainer}>
      {data.preListContent && (
        <div className={styles.preListContainer}>
          <p className={styles.preListTitle}>
            {data.preListContent.title}
            <span>
              {getCurrentNameOfMonth()} {getCurrentYear()}
            </span>
          </p>
        </div>
      )}
      <ul className={styles.listBlock}>
        <li className={styles.listItem}>
          <h3 className={styles.listItemTitle}></h3>
          <p className={styles.listItemSubTitle}></p>
        </li>
      </ul>
    </div>
  );
};

export default List;
