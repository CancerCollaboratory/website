import Link from "next/link";
import Image from "next/future/image";

const NavbarLink = ({
  label,
  isLinkWrapped,
  wrapStyle,
  isExternalLink,
  link,
  isImageWrapped,
  imageSrcPath,
  styleImage,
  imageWidth,
  imageHeight,
  isImageHighPriority,
}) => {
  return (
    <>
      {isLinkWrapped ? (
        isImageWrapped ? (
          isExternalLink ? (
            <a href={link} target="_blank">
              <div className={wrapStyle}>
                <Image
                  src={imageSrcPath}
                  alt={label}
                  priority={isImageHighPriority}
                  className={styleImage}
                  width={imageWidth}
                  height={imageHeight}
                />
              </div>
            </a>
          ) : (
            <Link href={link}>
              <div className={wrapStyle}>
                <Image
                  src={imageSrcPath}
                  alt={label}
                  priority={isImageHighPriority}
                  className={styleImage}
                  width={imageWidth}
                  height={imageHeight}
                />
              </div>
            </Link>
          )
        ) : isExternalLink ? (
          <a href={link} target="_blank">
            <div className={wrapStyle}>{label}</div>
          </a>
        ) : (
          <Link href={link}>
            <div className={wrapStyle}>{label}</div>
          </Link>
        )
      ) : isExternalLink ? (
        <a href={link} target="_blank">
          {label}
        </a>
      ) : (
        <Link href={link}>{label}</Link>
      )}
    </>
  );
};

export default NavbarLink;
