import Link from "next/link";
import Image from "next/future/image";

const NavbarLink = ({
  label,
  isLinkWrapped,
  styleWrap,
  isLinkExternal,
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
          isLinkExternal ? (
            <a href={link} target="_blank">
              <div className={styleWrap}>
                <Image
                  src={imageSrcPath}
                  alt={label}
                  priority={isImageHighPriority}
                  className={styleImage}
                  width={imageWidth}
                  height={imageHeight}
                  quality={100}
                  placeholder={"blur"}
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
                  quality={100}
                  placeholder={"blur"}
                />
              </div>
            </Link>
          )
        ) : isLinkExternal ? (
          <a href={link} target="_blank">
            <div className={styleWrap}>{label}</div>
          </a>
        ) : (
          <Link href={link}>
            <div className={styleWrap}>{label}</div>
          </Link>
        )
      ) : isImageWrapped ? (
        isLinkExternal ? (
          <a href={link} target="_blank">
            <Image
              src={imageSrcPath}
              alt={label}
              priority={isImageHighPriority}
              className={styleImage}
              width={imageWidth}
              height={imageHeight}
              quality={100}
              placeholder={"blur"}
            />
          </a>
        ) : (
          <Link href={link}>
            <Image
              src={imageSrcPath}
              alt={label}
              priority={isImageHighPriority}
              className={styleImage}
              width={imageWidth}
              height={imageHeight}
              quality={100}
              placeholder={"blur"}
            />
          </Link>
        )
      ) : isLinkExternal ? (
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
