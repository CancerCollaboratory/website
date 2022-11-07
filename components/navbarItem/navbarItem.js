import EscapeOutside from "react-escape-outside";
import ItemLink from "../itemLink/itemLink";
import NavbarMenu from "../navbarMenu/navbarMenu";

const NavbarItem = ({ itemLabel, isItemlLink, itemLink, itemMenu, isNavbarDropdownExpanded }) => {
  const { asPath } = useRouter();
  const [isItemMenuExpanded, setIsItemMenuExpanded] = useState(false);

  useEffect(() => {
    setIsItemMenuExpanded(false);
  }, [asPath, isNavbarDropdownExpanded]);

  function expandSubMenu() {
    !isItemMenuExpanded ? setIsItemMenuExpanded(true) : setIsItemMenuExpanded(false);
  }

  return (
    <EscapeOutside onEscapeOutside={() => setIsItemMenuExpanded(false)}>
      {isItemlLink ? (
        <div
          className={styles.navbarItem}
          onMouseOver={() => setIsItemMenuExpanded(true)}
          onMouseLeave={() => setIsItemMenuExpanded(false)}
        >
          <ItemLink label={itemLabel} link={itemLink} menuItems={itemMenu} />
          {isItemMenuExpanded && itemMenu && (
            <NavbarMenu
              styleMenu={styles.subMenuDropdown}
              styleSubMenu={styles.innerSubMenu}
              menuItems={itemMenu}
              hasSubMenuDivison={isItemlLink}
            />
          )}
        </div>
      ) : (
        <div className={styles.expandedMenuItem} onClick={() => expandSubMenu()}>
          <p className={styles.itemName}>{itemLabel + " ▾"}</p>
          {isItemMenuExpanded && (
            <NavbarMenu
              styleMenu={styles.expandedSubMenuItem}
              styleSubMenu={styles.innerExpandedMenu}
              menuItems={itemMenu}
              hasSubMenuDivison={isItemlLink}
            />
          )}
        </div>
      )}
    </EscapeOutside>
  );
};

export default NavbarItem;
