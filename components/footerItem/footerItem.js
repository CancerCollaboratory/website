import clsx from "clsx";
import NavbarLink from "../navbarLink/navbarLink";
import styles from "../footer/footer.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const FooterItem = ({ label, labelLink, footerItem }) => {
  return (
    <div
      className={clsx(
        styles.footerItemContainer,
        footerItem.subItems && styles.footerItemRightBorder
      )}
    >
      <NavbarLink label={label} link={labelLink} styleLink={utilStyles.itemLabel} />
      <ul
        className={clsx(
          styles.subItemsList,
          footerItem.subItems?.length === 2 && styles.subItemsRow
        )}
      >
        {footerItem.subItems?.map((subItem, subItemIndex) =>
          !subItem?.column ? (
            <li key={subItemIndex}>
              <NavbarLink label={subItem.label} link={subItem.link} />
            </li>
          ) : (
            <div className={subItemIndex === 0 && styles.columnPadding}>
              {subItem.column.map((columnItem, columnIndex) => (
                <li key={columnIndex}>
                  <NavbarLink label={columnItem.label} link={columnItem.link} />
                </li>
              ))}
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterItem;
