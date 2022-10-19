import Link from "next/link";
import Image from "next/future/image";

const NavbarLink = ({
  label,
  isExternalLink,
  link,
  isImage,
  srcPath,
  hasPriority,
  styleImage,
  width,
  height,
}) => {
  return (
    <>
      {isImage ? (
        isExternalLink ? (
          <a href={link} target="_blank">
            <Image
              src={srcPath}
              alt={label}
              priority={hasPriority}
              className={styleImage}
              width={width}
              height={height}
            />
          </a>
        ) : (
          <Link href={link}>
            <>
              <Image
                src={srcPath}
                alt={label}
                priority={hasPriority}
                className={styleImage}
                width={width}
                height={height}
              />
            </>
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
