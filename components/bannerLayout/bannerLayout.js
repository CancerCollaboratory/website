import Banner from "../banner/banner";
import CustomLink from "../customLink/customLink";
import bannerData from "../../data/components/banner/banner.json";

const BannerLayout = ({ children }) => {
  const banner = bannerData.banner;

  if (!children) {
    return null;
  } else {
    if (banner?.isActive !== true) {
      return children;
    } else {
      return (
        <>
          <Banner
            title={banner?.title}
            description={banner?.description}
            isDescriptionLinkExternal={banner?.isDescriptionLinkExternal}
          >
            {banner?.linkLabel && banner?.linkTarget && (
              <CustomLink
                label={banner.linkLabel}
                link={banner.linkTarget}
                isLinkExternal={banner.isLinkTargetExternal}
              />
            )}
          </Banner>
          {children}
        </>
      );
    }
  }
};

export default BannerLayout;
