import clsx from "clsx";
import styles from "./table.module.scss";
import NavbarLink from "../navbarLink/navbarLink";

const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {data.tableContent.map((item, index) => (
          <tr className={styles.tableRow} key={index}>
            {item.row.map((subItem, subIndex) => (
              <td className={styles.tableCell} key={subIndex}>
                {subItem.board && (
                  <div
                    className={clsx(
                      styles.cellContainer,
                      subItem.stats.hasBackgroundColor === "true"
                        ? styles.cellBackground
                        : undefined
                    )}
                  >
                    <NavbarLink
                      label={subItem.board.image.label}
                      link={subItem.board.image.link}
                      isImageWrapped={true}
                      imageSrcPath={subItem.board.image.srcPath}
                      styleImage={styles.boardImage}
                      imageWidth={70}
                      imageHeight={70}
                    />
                    <NavbarLink
                      label={subItem.board.body.label}
                      link={subItem.board.body.link}
                      styleLink={styles.boardLink}
                    />
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
