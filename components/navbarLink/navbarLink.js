import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../navbar/navbar.module.scss";

const NavbarLink = ({ label, link, menuItems }) => {
  const { asPath } = useRouter();
  const [isItemActiveState, setIsItemActiveState] = useState(false);

  useEffect(() => {
    link === asPath || menuItems?.find((item) => item.link === asPath)
      ? setIsItemActiveState(true)
      : setIsItemActiveState(false);
  }, [link, asPath, menuItems]);

  return (
    label &&
    link && (
      <Link href={link} legacyBehavior>
        <a className={clsx(isItemActiveState ? styles.selectNavbarItem : undefined)}>
          {menuItems ? label + " ▾" : label}
        </a>
      </Link>
    )
  );
};

export default NavbarLink;
