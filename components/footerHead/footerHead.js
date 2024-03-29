import React from "react";
import Image from "next/image";
import CustomLink from "../customLink/customLink";
import { getCurrentYear } from "../../lib/functions/timeValue";
import styles from "../footer/footer.module.scss";

const FooterHead = ({ headItem }) => {
  if (!headItem.logo?.link || !headItem.logo?.srcPath || !headItem.logo?.label) {
    if (!headItem.links || !headItem.label) {
      return null;
    } else {
      return (
        <div className={styles.headItemContainer}>
          <p className={styles.headItemLabel}>
            © <span>{getCurrentYear()}</span> {headItem.label}
          </p>
          <div className={styles.headLinksContainer}>
            {headItem.links.map((linkItem, index) => (
              <React.Fragment key={index}>
                <CustomLink
                  label={linkItem.label}
                  link={linkItem.link}
                  isLinkExternal={linkItem.isLinkExternal}
                />
                {!linkItem.lastLink && <div className={styles.verticalLine}></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className={styles.logoContainer}>
        <CustomLink link={headItem.logo.link} isLinkExternal={true}>
          <Image
            src={headItem.logo.srcPath}
            alt={headItem.logo.label}
            className={styles.logo}
            quality={100}
            width={77}
            height={56}
          />
        </CustomLink>
      </div>
    );
  }
};

export default FooterHead;
