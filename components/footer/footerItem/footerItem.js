import clsx from "clsx";
import NavbarLink from "../../navbar/navbarLink/navbarLink";
import styles from "../footer/footer.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const FooterItem = ({ label, labelLink, footerItem }) => {
  return (
    <div
      className={clsx(
        styles.footerItemContainer,
        footerItem.subItems ? styles.footerItemRightBorder : styles.resetFooterItemMargin
      )}
    >
      <NavbarLink
        label={label}
        link={labelLink}
        styleLink={clsx(
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
                <NavbarLink
                  label={subItem.label}
                  link={subItem.link}
                  styleLink={subItem.lastSubItem && styles.resetInternalMargins}
                />
              </li>
            ) : (
              <div
                className={subItemIndex === 0 ? styles.columnPadding : undefined}
                key={subItemIndex}
              >
                {subItem.column.map((columnItem, columnIndex) => (
                  <li key={columnIndex}>
                    <NavbarLink
                      label={columnItem.label}
                      link={columnItem.link}
                      styleLink={columnItem.lastSubItem && styles.resetInternalMargins}
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
