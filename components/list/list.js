import { renderData } from "../../lib/functions/renderData";
import styles from "./list.module.scss";

const List = ({ list }) => {
  if (!list) {
    return null;
  } else {
    return (
      <ul className={styles.container}>
        {list.map((item, index) => item.value && <li key={index}>{renderData(item.value)}</li>)}
      </ul>
    );
  }
};

export default List;
