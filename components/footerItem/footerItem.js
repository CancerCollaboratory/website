import clsx from "clsx";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "../footer/footer.module.scss";

const FooterItem = ({ label, labelLink, footerItem }) => {
  return (
    <div
      className={clsx(
        styles.footerItemContainer,
        footerItem.subItems ? styles.footerItemRightBorder : styles.resetFooterItemMargin
      )}
    >
      <CustomLink
        label={label}
        link={labelLink}
        styleLabel={clsx(
          utilStyles.itemLabel,
          !footerItem.subItems ? styles.resetInternalMargins : undefined
        )}
      />
      {footerItem.subItems && (
        <ul
          className={clsx(
            styles.subItemsList,
            footerItem.subItems[0].column && styles.subItemsGrid
          )}
        >
          {footerItem.subItems?.map((subItem, subItemIndex) =>
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

export default FooterItem;
