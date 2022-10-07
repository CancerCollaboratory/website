import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.secondaryNavbar}></div>
      <div className={styles.mainNavbar}>
        <img
          src="/assets/navbar/svgs/logo-cancer-genome-collaboratory.svg"
          alt="Cancer Genome Collaboratory"
          width="275"
          height="112"
          className={styles.siteLogo}
        ></img>
        <ul className={styles.navbarItems}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Our Services</Link>
          </li>
          <li>
            <Link href="/research">Our Research</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
