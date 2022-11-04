import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../navbar/navbar.module.scss";
import data from "../../data/components/navbarItems.json";

const NavbarLink = ({ label, isLinkExternal, link, menuItems, children }) => {
  const { asPath } = useRouter();

  const isActive = true; // TODO, this can be derived directly from comparing current url with the link prop

  /**
   * what are the different cases for navbarlink we have to consider?
   * - is the link internal or external?
   * - does it have sub items ie. do we need to display the caret? is it a menu?
   * - display some kind of item/child prop
   */

  if (isLinkExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <div>{children}</div>
      </a>
    );
  } else {
    <Link href={link}>
      <div>{children}</div>
    </Link>;
  }
};

//   return (
//     <>
//       {isLinkWrapped ? (
//         isImageWrapped ? (
//           isLinkExternal ? (
//             <a href={link} target="_blank" rel="noreferrer">
//               <div className={styleWrap}>{children}</div>
//             </a>
//           ) : (
//             <Link href={link}>
//               <div className={styleWrap}>{children}</div>
//             </Link>
//           )
//         ) : isLinkExternal ? (
//           <a href={link} target="_blank" rel="noreferrer">
//             <div className={styleWrap}>{label}</div>
//           </a>
//         ) : (
//           <Link href={link}>
//             <div className={styleWrap}>{label}</div>
//           </Link>
//         )
//       ) : isImageWrapped ? (
//         isLinkExternal ? (
//           <a href={link} target="_blank" rel="noreferrer">
//             {children}
//           </a>
//         ) : (
//           <Link href={link}>{children}</Link>
//         )
//       ) : isLinkExternal ? (
//         <a href={link} target="_blank" rel="noreferrer">
//           {label}
//         </a>
//       ) : (
//         <Link href={link}>
//           <a className={clsx(isItemActiveState ? styles.selectedNavbarItem : undefined, styleLink)}>
//             {menuItems ? label + " ▾" : label}
//           </a>
//         </Link>
//       )}
//     </>
//   );
// };

export default NavbarLink;
