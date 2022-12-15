import clsx from "clsx";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "../footer/footer.module.scss";

const FooterTail = ({ label, labelLink, subItems }) => {
  return (
    <div
      className={clsx(
        styles.tailItemContainer,
        subItems ? styles.tailItemRightBorder : styles.resetTailItemMargins
      )}
    >
      <CustomLink
        label={label}
        link={labelLink}
        styleLabel={clsx(utilStyles.itemLabel, !subItems ? styles.resetInternalMargins : undefined)}
      />
      {subItems && (
        <ul className={clsx(styles.subItemsList, subItems[0].column && styles.subItemsGrid)}>
          {subItems?.map((subItem, subItemIndex) =>
            !subItem?.column ? (
              <li key={subItemIndex}>
                <CustomLink
                  label={subItem.label}
                  link={subItem.link}
                  styleLabel={subItem.lastSubItem && styles.resetInternalMargins}
                />
              </li>
            ) : (
              <div
                className={subItemIndex === 0 ? styles.columnPadding : undefined}
                key={subItemIndex}
              >
                {subItem.column.map((columnItem, columnIndex) => (
                  <li key={columnIndex}>
                    <CustomLink
                      label={columnItem.label}
                      link={columnItem.link}
                      styleLabel={columnItem.lastSubItem && styles.resetInternalMargins}
                    />
                  </li>
                ))}
              </div>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default FooterTail;
