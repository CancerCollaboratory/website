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
  imageHasPriority,
  imageWidth,
  imageHeight,
}) => {
  return (
    <>
      {isLinkWrapped ? (
        isImageWrapped ? (
          isLinkExternal ? (
            <a href={link} target="_blank" rel="noreferrer">
              <div className={styleWrap}>
                <Image
                  src={imageSrcPath}
                  alt={label}
                  priority={imageHasPriority}
                  className={styleImage}
                  width={imageWidth}
                  height={imageHeight}
                  quality={100}
                />
              </div>
            </a>
          ) : (
            <Link href={link}>
              <div className={styleWrap}>
                <Image
                  src={imageSrcPath}
                  alt={label}
                  priority={imageHasPriority}
                  className={styleImage}
                  width={imageWidth}
                  height={imageHeight}
                  quality={100}
                />
              </div>
            </Link>
          )
        ) : isLinkExternal ? (
          <a href={link} target="_blank" rel="noreferrer">
            <div className={styleWrap}>{label}</div>
          </a>
        ) : (
          <Link href={link}>
            <div className={styleWrap}>{label}</div>
          </Link>
        )
      ) : isImageWrapped ? (
        isLinkExternal ? (
          <a href={link} target="_blank" rel="noreferrer">
            <Image
              src={imageSrcPath}
              alt={label}
              priority={imageHasPriority}
              className={styleImage}
              width={imageWidth}
              height={imageHeight}
              quality={100}
            />
          </a>
        ) : (
          <Link href={link}>
            <Image
              src={imageSrcPath}
              alt={label}
              priority={imageHasPriority}
              className={styleImage}
              width={imageWidth}
              height={imageHeight}
              quality={100}
            />
          </Link>
        )
      ) : isLinkExternal ? (
        <a href={link} target="_blank" rel="noreferrer">
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
