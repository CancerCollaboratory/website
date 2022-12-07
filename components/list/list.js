import { renderData } from "../../lib/functions/renderData";
import styles from "./list.module.scss";

const List = ({ list }) => {
  if (!list) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <ul className={styles.block}>
          {list.map((item, index) => item.value && <li key={index}>{renderData(item.value)}</li>)}
        </ul>
      </div>
    );
  }
};

export default List;
