import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../navbar/navbar.module.scss";
import data from "../../data/components/navbarItems.json";

const NavbarLink = ({
  label,
  isLinkWrapped,
  styleWrap,
  isLinkExternal,
  link,
  styleLink,
  menuItems,
  isImageWrapped,
  children,
}) => {
  const { asPath } = useRouter();

  const isActive = true; // TODO

  if (isLinkWrapped) {
    if (isImageWrapped) {
      if (isLinkExternal) {
        <a href={link} target="_blank" rel="noreferrer">
          <div className={styleWrap}>{children}</div>
        </a>;
      } else {
        <Link href={link}>
          <div className={styleWrap}>{children}</div>
        </Link>;
      }
    }
  } else if (isImageWrapped) {
  }

  return (
    <>
      {isLinkWrapped ? (
        isImageWrapped ? (
          isLinkExternal ? (
            <a href={link} target="_blank" rel="noreferrer">
              <div className={styleWrap}>{children}</div>
            </a>
          ) : (
            <Link href={link}>
              <div className={styleWrap}>{children}</div>
            </Link>
          )
        ) : isLinkExternal ? (
          <a href={link} target="_blank" rel="noreferrer">
            <div className={styleWrap}>{label}</div>
          </a>
        ) : (
          <Link href={link}>
            <div className={styleWrap}>{label}</div>
          </Link>
        )
      ) : isImageWrapped ? (
        isLinkExternal ? (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          <Link href={link}>{children}</Link>
        )
      ) : isLinkExternal ? (
        <a href={link} target="_blank" rel="noreferrer">
          {label}
        </a>
      ) : (
        <Link href={link}>
          <a className={clsx(isActive ? styles.selectedNavbarItem : undefined, styleLink)}>
            {menuItems ? label + " ▾" : label}
          </a>
        </Link>
      )}
    </>
  );
};

export default NavbarLink;
