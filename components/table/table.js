import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import { renderData } from "../../lib/functions/renderData";
import styles from "./table.module.scss";

const Table = ({ tableTitle, tableBody }) => {
  return (
    <>
      {tableTitle && <p className={styles.tableTitle}>{tableTitle}</p>}
      <table className={styles.table}>
        <tbody>
          {tableBody.map((item, index) => (
            <tr key={index}>
              {item.columns.map((column, subIndex) => (
                <td className={styles.tableCellTitle} key={subIndex}>
                  {column.title &&
                    renderData(
                      column.title,
                      column.isLinkExternal === "true" ? insertLinkExternal : insertLinkInternal
                    )}
                  {column.content && (
                    <div className={styles.tableCellContent}>{renderData(column.content)}</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
