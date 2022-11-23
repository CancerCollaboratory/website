import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import styles from "./table.module.scss";

const Table = ({ title, body }) => {
  return (
    <table className={styles.table}>
      {title && <caption className={styles.title}>{title}</caption>}
      <tbody>
        {body.map((item, index) => (
          <tr key={index}>
            {item.columns.map((column, subIndex) => (
              <td className={styles.cell} key={subIndex}>
                {column.title &&
                  renderData(
                    column.title,
                    column.isLinkExternal ? insertLinkExternal : insertLinkInternal
                  )}
                {column.content && (
                  <div className={styles.cellContent}>{renderData(column.content)}</div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
