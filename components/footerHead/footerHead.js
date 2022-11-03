import React from "react";
import NavbarLink from "../navbarLink/navbarLink";
import { getCurrentYear } from "../../lib/functions/timeValues";
import styles from "../footer/footer.module.scss";

const FooterHead = ({ headItem }) => {
  return (
    <>
      {headItem.logo ? (
        <div className={styles.footerLogoContainer}>
          <NavbarLink
            label={headItem.logo.label}
            isLinkExternal={true}
            link={headItem.logo.link}
            isImageWrapped={true}
            imageSrcPath={headItem.logo.srcPath}
            styleImage={styles.footerLogo}
            imageHasPriority={false}
            imageWidth={77}
            imageHeight={56}
          />
        </div>
      ) : (
        <div className={styles.headItemContainer}>
          <p className={styles.headItemLabel}>
            © <span>{getCurrentYear()}</span> {headItem.label}
          </p>
          <div className={styles.headLinksContainer}>
            {headItem.links.map((linkItem, index) => (
              <React.Fragment key={index}>
                <NavbarLink
                  label={linkItem.label}
                  isLinkExternal={linkItem.isLinkExternal === "true"}
                  link={linkItem.link}
                />
                {!linkItem.lastLink && <div className={styles.verticalLine}></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FooterHead;
