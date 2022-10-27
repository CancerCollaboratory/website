import NavbarLink from "../navbarLink/navbarLink";
import styles from "../subNavbar/subNavbar.module.scss";

const SubNavbarItem = ({ navbarItem }) => {
  return (
    <>
      {navbarItem.label !== "Support" && (
        <ul className={styles.subNavbarItemContainer}>
          {navbarItem.navbarSubMenuItems.map((subItem, subIndex) => {
            <li>
              <NavbarLink label={subItem.label} link={subItem.link} key={subIndex} />
            </li>;
          })}
        </ul>
      )}
    </>
  );
};

export default SubNavbarItem;
