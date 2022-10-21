import NavbarLink from "../navbarLink/navbarLink";
import styles from "../navbar/navbar.module.scss";

const MenuDropdown = ({ label, hasLink, link, styleSubMenu, items, shouldExpand }) => {
  return (
    <>
      {hasLink ? (
        <>
          <NavbarLink label={label} link={link} />
          {shouldExpand && (
            <ul className={styleSubMenu}>
              {items?.map((item, index) => (
                <li>
                  <NavbarLink key={index} label={item.label} link={item.link} />
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <>
          <p className={styles.itemName}>{label}</p>
          {shouldExpand && (
            <ul className={styleSubMenu}>
              {items?.map((item, index) => (
                <li>
                  <NavbarLink key={index} label={item.label} link={item.link} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default MenuDropdown;
