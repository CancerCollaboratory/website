import parse from "html-react-parser";
import { micromark } from "micromark";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLinks";
import styles from "./table.module.scss";

const Table = ({ data }) => {
  return (
    <>
      {data.tableHead?.title && <p className={styles.tableTitle}>{data.tableHead.title}</p>}
      <table className={styles.table}>
        <tbody>
          {data.tableBody.map((item, index) => (
            <tr key={index}>
              {item.row.map((subItem, subIndex) => (
                <td className={styles.tableCell} key={subIndex}>
                  {subItem.cellHead &&
                    parse(
                      micromark(subItem.cellHead.title),
                      subItem.cellHead.isLinkExternal === "true"
                        ? insertLinkExternal
                        : insertLinkInternal
                    )}
                  {subItem.cellBody && (
                    <div className={styles.cellBodyContent}>
                      {parse(micromark(subItem.cellBody.content))}
                    </div>
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
