import clsx from "clsx";
import { getNameOfMonth, getCurrentYear } from "../../lib/functions/timeValues";
import styles from "./table.module.scss";

const Table = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      {data.preTableContent && (
        <div className={styles.preTable}>
          <p className={styles.preTableTitle}>
            {data.preTableContent.title}
            <span>
              {getNameOfMonth()} {getCurrentYear()}
            </span>
          </p>
        </div>
      )}
      <table className={styles.table}>
        <tbody>
          {data.tableContent.map((item, index) => (
            <tr className={styles.tableRow} key={index}>
              {item.row.map((subItem, subIndex) => (
                <td className={styles.tableCell} key={subIndex}>
                  {subItem.stats && (
                    <div
                      className={clsx(
                        styles.cellContainer,
                        subItem.stats.hasBackgroundColor === "true"
                          ? styles.cellBackground
                          : undefined
                      )}
                    >
                      <h3 className={styles.cellTitle}>{subItem.stats.cellTitle}</h3>
                      <p className={styles.cellSubTitle}>{subItem.stats.cellSubTitle}</p>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
