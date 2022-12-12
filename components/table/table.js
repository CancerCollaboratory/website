import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import styles from "./table.module.scss";

const Table = ({ title, body }) => {
  return (
    <table className={styles.table}>
      {title && <caption className={styles.title}>{title}</caption>}
      <tbody>
        {body?.rows?.map((item, index) => (
          <tr key={index}>
            {item.cells?.map((cell, subIndex) => (
              <td className={styles.cell} key={subIndex}>
                {cell.title &&
                  renderData(
                    cell.title,
                    cell.isLinkExternal ? insertLinkExternal : insertLinkInternal
                  )}
                {cell.stat && <div className={styles.cellContent}>{renderData(cell.stat)}</div>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
