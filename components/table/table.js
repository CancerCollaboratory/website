import styles from "./table.module.scss";

const Table = ({ data }) => {
  return (
    <table className={styles.tableContainer}>
      <tbody>
        <tr className={styles.tableRow}>
          <td>Row Data</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
