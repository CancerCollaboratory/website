import Link from "next/link";
import Image from "next/image";
import IconArrow from "../../public/assets/navLine/icon-arrow-red.svg";
import styles from "./supportFooterNav.module.scss";
import clsx from "clsx";

export const SupportFooterNavItem = ({ label, link, direction }) => (
  <Link href={link} className={styles.supportFooterNav}>
    {direction === DIRECTION.right && label}
    <Image
      src={IconArrow}
      alt={"Icon"}
      className={clsx(styles.iconArrow, direction === DIRECTION.left && styles.leftArrow)}
      quality={100}
    />
    {direction === DIRECTION.left && label}
  </Link>
);

const DIRECTION = Object.freeze({
  left: "LEFT",
  right: "RIGHT",
});
type Nav = { label: string; link: string };
const SupportFooterNav = ({ previous, next }: { previous?: Nav; next?: Nav }) => (
  <div className={styles.cont}>
    <div>{previous && <SupportFooterNavItem {...previous} direction={DIRECTION.left} />}</div>
    <div>{next && <SupportFooterNavItem {...next} direction={DIRECTION.right} />}</div>
  </div>
);

export default SupportFooterNav;
