import utilStyles from "../../styles/utils.module.scss";
import styles from "./basicTable.module.scss";

const BasicTable = ({ headRow, body }) => {
  if (!headRow || !body) {
    return null;
  } else {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            {headRow.map(
              (cell, index) =>
                cell.value && (
                  <th className={utilStyles.shortenText} key={index}>
                    {cell.value}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {body.map((row, index) => (
            <tr className={index % 2 !== 0 ? styles.rowBackground : undefined} key={index}>
              {row.map(
                (cell, subIndex) =>
                  cell.value && (
                    <td className={utilStyles.shortenText} key={subIndex}>
                      {cell.value}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default BasicTable;
