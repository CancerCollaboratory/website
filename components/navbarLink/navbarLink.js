import Link from "next/link";
import Image from "next/future/image";

const NavbarLink = ({
  label,
  isLinkWrapped,
  styleWrap,
  isExternalLink,
  link,
  styleLink,
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
              <div className={styleWrap}>
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
              <div className={styleWrap}>
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
            <div className={styleWrap}>{label}</div>
          </a>
        ) : (
          <Link href={link}>
            <div className={styleWrap}>{label}</div>
          </Link>
        )
      ) : isExternalLink ? (
        <a href={link} target="_blank">
          {label}
        </a>
      ) : (
        <Link href={link}>
          <a className={styleLink}>{label}</a>
        </Link>
      )}
    </>
  );
};

export default NavbarLink;
