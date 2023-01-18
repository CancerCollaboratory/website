import clsx from "clsx";
import SupportNav from "../supportNav/supportNav";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./supportSidebar.module.scss";
import Image from "next/image";
import Link from "next/link";
import IconArrow from "../../public/assets/navLine/icon-arrow-red.svg";

const CallOut = ({ children, title, link, image }) => (
  <div className={styles.callOut}>
    <div>
      <Image src={image.src} alt={image.alt} width="30" height="30" />
      <h2>{title}</h2>
    </div>
    <p>{children}</p>
    <div>
      <Link href={link.href}>{link.text}</Link>
      <Image src={IconArrow} alt={"Icon"} className={styles.arrow} />
    </div>
  </div>
);

const SupportSidebar = () => {
  return (
    <div className={clsx(styles.container, utilStyles.altGradientBackgroundGray)}>
      <SupportNav />
      <CallOut
        title="For Technical Assistance"
        link={{ text: "CONTACT US", href: "/contact-us" }}
        image={{
          src: "../../assets/callToAction/icon-tech-assistance.svg",
          alt: "icon documentation",
        }}
      >
        If you can’t find what you are looking for, please contact our support team. We are working
        hard to get back to you within 1-2 business days.
      </CallOut>
      <CallOut
        title="ICGC Cloud Guide"
        link={{ text: "BROWSE THE USER GUIDE", href: "https://docs.icgc.org/download/guide/" }}
        image={{ src: "../../assets/common/icon-docs.svg", alt: "icon lightbulb" }}
      >
        Accessing and analyzing ICGC data on the Collaboratory.
      </CallOut>
    </div>
  );
};

export default SupportSidebar;
