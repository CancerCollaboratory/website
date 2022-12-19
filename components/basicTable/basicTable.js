import styles from "./basicTable.module.scss";

const BasicTable = ({ headRow, body }) => {
  if (!headRow || !body) {
    return null;
  } else {
    return (
      <table className={styles.table}>
        <thead>
          <tr>{headRow.map((cell, index) => cell.value && <th key={index}>{cell.value}</th>)}</tr>
        </thead>
        <tbody>
          {body.map((row, index) => (
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
