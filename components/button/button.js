import Link from "next/link";
import Image from "next/future/image";
import IconArrow from "../../public/assets/common/icon-arrow-white.svg";
import styles from "./button.module.scss";

const Button = ({ tag, label, link, isLinkExternal, hasIcon }) => {
  if (!label || !link) {
    return null;
  } else {
    const buttonContent = (
      <div className={styles.innerContainer}>
        <p className={styles.label}>{label}</p>
        {hasIcon && (
          <Image
            src={IconArrow}
            alt={"Icon"}
            link={link}
            className={styles.iconArrow}
            quality={100}
            width={12}
            height={12}
          />
        )}
      </div>
    );

    if (!isLinkExternal) {
      <div className={styles.container}>
        {tag && <p className={styles.tag}>{tag}</p>}
        <Link href={link}>{buttonContent}</Link>
      </div>;
    } else {
      return (
        <div className={styles.container}>
          {tag && <p className={styles.tag}>{tag}</p>}
          <a href={link} target="_blank" rel="noreferrer">
            {buttonContent}
          </a>
        </div>
      );
    }
  }
};

export default Button;
