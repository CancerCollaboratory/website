import NavbarLink from "../navbarLink/navbarLink";
import styles from "../navbar/navbar.module.scss";

const MenuDropdown = ({ label, hasLink, link, styleSubMenu, items, isHovered }) => {
  return (
    <>
      {hasLink ? (
        <>
          <NavbarLink label={label} link={link} />
          {isHovered && (
            <div className={styleSubMenu}>
              {items?.map((item, index) => (
                <NavbarLink key={index} label={item.label} link={item.link} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <p className={styles.itemName}>{label}</p>
          {isHovered && (
            <div className={styleSubMenu}>
              {items?.map((item, index) => (
                <NavbarLink key={index} label={item.label} link={item.link} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MenuDropdown;
