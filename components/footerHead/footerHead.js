import React from "react";
import Image from "next/future/image";
import CustomLink from "../customLink/customLink";
import { getCurrentYear } from "../../lib/functions/timeValue";
import styles from "../footer/footer.module.scss";

const FooterHead = ({ headItem }) => {
  return headItem.logo ? (
    <div className={styles.footerLogoContainer}>
      <CustomLink link={headItem.logo.link} isLinkExternal={true}>
        <Image
          src={headItem.logo.srcPath}
          alt={headItem.logo.label}
          className={styles.footerLogo}
          quality={100}
          width={77}
          height={56}
        />
      </CustomLink>
    </div>
  ) : (
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
};

export default FooterHead;
