import Link from "next/link";
import Image from "next/image";
import IconArrow from "../../public/assets/navLine/icon-arrow-red.svg";
import styles from "./supportFooterNav.module.scss";

const SupportFooterNavItem = ({ label, link }) => (
  <Link href={link} className={styles.supportFooterNav}>
    {label}
    <Image src={IconArrow} alt={"Icon"} className={styles.iconArrow} quality={100} />
  </Link>
);

const SupportFooterNavCont = ({ children }) => <div>{children}</div>;

const SupportFooterNav = {
  Item: SupportFooterNavItem,
  Cont: SupportFooterNavCont,
};

export default SupportFooterNav;
