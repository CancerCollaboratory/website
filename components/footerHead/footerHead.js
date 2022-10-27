import React from "react";
import NavbarLink from "../navbarLink/navbarLink";
import styles from "../footer/footer.module.scss";

const FooterHead = ({ headItem }) => {
  function getCurrentYear() {
    return <span>{new Date().getFullYear()}</span>;
  }

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
            imageHasPriority={true}
            imageWidth={77}
            imageHeight={56}
          />
        </div>
      ) : (
        <div className={styles.headItemContainer}>
          <p className={styles.headItemLabel}>
            © {getCurrentYear()} {headItem.label}
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
