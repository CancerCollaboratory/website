import EscapeOutside from "react-escape-outside";
import NavbarLink from "../navbarLink/navbarLink";
import NavbarDropdown from "../navbarDropdown/navbarDropdown";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../navbar/navbar.module.scss";

const NavbarItem = ({ itemLabel, isItemlLink, itemLink, itemDropdown, isDropdownExpanded }) => {
  const { asPath } = useRouter();
  const [isItemDropdownVisible, setIsItemDropdownVisible] = useState(false);

  useEffect(() => {
    setIsItemDropdownVisible(false);
  }, [asPath, isDropdownExpanded]);

  function expandSubDropdown() {
    !isItemDropdownVisible ? setIsItemDropdownVisible(true) : setIsItemDropdownVisible(false);
  }

  return (
    <EscapeOutside onEscapeOutside={() => setIsItemDropdownVisible(false)}>
      {isItemlLink ? (
        <div
          className={styles.itemContainer}
          onMouseOver={() => setIsItemDropdownVisible(true)}
          onMouseLeave={() => setIsItemDropdownVisible(false)}
        >
          <NavbarLink label={itemLabel} link={itemLink} dropdownItems={itemDropdown} />
          {isItemDropdownVisible && itemDropdown && (
            <NavbarDropdown
              styleDropdown={styles.dropdown}
              dropdownItems={itemDropdown}
              showActivePage={isItemlLink}
            />
          )}
        </div>
      ) : (
        <div className={styles.expandedItemContainer} onClick={() => expandSubDropdown()}>
          <p className={styles.itemName}>{itemLabel + " ▾"}</p>
          {isItemDropdownVisible && (
            <NavbarDropdown
              styleDropdown={styles.expandedSubDropdown}
              dropdownItems={itemDropdown}
              showActivePage={isItemlLink}
            />
          )}
        </div>
      )}
    </EscapeOutside>
  );
};

export default NavbarItem;
