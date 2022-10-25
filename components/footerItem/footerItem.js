import clsx from "clsx";
import NavbarLink from "../navbarLink/navbarLink";
import styles from "../footer/footer.module.scss";

const FooterItem = ({ label, labelLink, footerItem }) => {
  return (
    <div
      className={clsx(
        styles.footerItemContainer,
        footerItem.subItems && styles.footerItemRightBorder
      )}
    >
      <NavbarLink label={label} link={labelLink} />
      {footerItem.subItems?.map((subItem, index) => (
        <ul key={index}>
          <li>
            <NavbarLink label={subItem.label} link={subItem.link} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FooterItem;
