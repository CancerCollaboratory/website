import styles from "./basicTable.module.scss";

const BasicTable = ({ tableHeadRow, tableBody }) => {
  if (!tableHeadRow || !tableBody) {
    return null;
  } else {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            {tableHeadRow.map((cell, index) => cell.value && <th key={index}>{cell.value}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((row, index) => (
            <tr className={row.hasBackground ? styles.rowBackground : undefined} key={index}>
              {row.map((cell, subIndex) => cell.value && <td key={subIndex}>{cell.value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default BasicTable;
