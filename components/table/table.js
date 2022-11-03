import styles from "./table.module.scss";

const Table = ({ data }) => {
  return (
    <table className={styles.tableContainer}>
      <tbody>
        {data.map((item, index) => (
          <tr className={styles.tableRow} key={index}>
            {item.row.map((subItem, subIndex) => (
              <td className={styles.tableCell} key={subIndex}>
                {subItem.stats && (
                  <div className={styles.cellContainer}>
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
  );
};

export default Table;
