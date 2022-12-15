import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../navbar/navbar.module.scss";

const NavbarLink = ({ label, link, dropdownItems }) => {
  const { asPath } = useRouter();
  const [isItemActiveState, setIsItemActiveState] = useState(false);

  useEffect(() => {
    link === asPath || dropdownItems?.find((item) => item.link === asPath)
      ? setIsItemActiveState(true)
      : setIsItemActiveState(false);
  }, [link, asPath, dropdownItems]);

  return (
    label &&
    link && (
      <Link href={link} legacyBehavior>
        <a className={clsx(isItemActiveState ? styles.selectedNavbarItem : undefined)}>
          {dropdownItems ? label + " ▾" : label}
        </a>
      </Link>
    )
  );
};

export default NavbarLink;
