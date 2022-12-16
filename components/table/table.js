import clsx from "clsx";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./table.module.scss";

const Table = ({ title, body }) => {
  if (!title || !body) {
    return null;
  } else {
    return (
      <table className={styles.table}>
        <caption className={styles.title}>{title}</caption>
        <tbody>
          {body.rows?.map((item, index) => (
            <tr key={index}>
              {item.cells?.map((cell, subIndex) => (
                <td className={clsx(styles.cell, utilStyles.commonAnchor)} key={subIndex}>
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
  }
};

export default Table;
