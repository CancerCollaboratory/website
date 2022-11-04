import clsx from "clsx";
import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../navbar/navbar.module.scss";

const NavbarLink = ({
  label,
  isLinkWrapped,
  styleWrap,
  isLinkExternal,
  link,
  styleLink,
  menuItems,
  isImageWrapped,
  imageSrcPath,
  styleImage,
  imageWidth,
  imageHeight,
  isImageHighPriority,
}) => {
  const { asPath } = useRouter();
  const [isItemActiveState, setIsItemActiveState] = useState(false);

  useEffect(() => {
    link === asPath ||
    menuItems?.find(
      item => item.link === asPath || item.subMenuSection?.find(subItem => subItem.link === asPath)
    )
      ? setIsItemActiveState(true)
      : setIsItemActiveState(false);
  });

  return (
    <>
      {isLinkWrapped ? (
        isImageWrapped ? (
          isLinkExternal ? (
            <a href={link} target="_blank" rel="noreferrer">
              <div className={styleWrap}>
                <Image
                  src={imageSrcPath}
                  alt={label}
                  priority={isImageHighPriority}
                  className={styleImage}
                  width={imageWidth}
                  height={imageHeight}
                  quality={100}
                />
              </div>
            </a>
          ) : (
            <Link href={link}>
              <div className={styleWrap}>
                <Image
                  src={imageSrcPath}
                  alt={label}
                  priority={isImageHighPriority}
                  className={styleImage}
                  width={imageWidth}
                  height={imageHeight}
                  quality={100}
                />
              </div>
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
            <Image
              src={imageSrcPath}
              alt={label}
              priority={isImageHighPriority}
              className={styleImage}
              width={imageWidth}
              height={imageHeight}
              quality={100}
            />
          </a>
        ) : (
          <Link href={link}>
            <Image
              src={imageSrcPath}
              alt={label}
              priority={isImageHighPriority}
              className={styleImage}
              width={imageWidth}
              height={imageHeight}
              quality={100}
            />
          </Link>
        )
      ) : isLinkExternal ? (
        <a href={link} target="_blank" rel="noreferrer">
          {label}
        </a>
      ) : (
        <Link href={link}>
          <a className={clsx(isItemActiveState ? styles.selectedNavbarItem : undefined, styleLink)}>
            {menuItems ? label + " ▾" : label}
          </a>
        </Link>
      )}
    </>
  );
};

export default NavbarLink;
