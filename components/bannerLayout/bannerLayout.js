import Banner from "../banner/banner";
import CustomLink from "../customLink/customLink";
import bannerData from "../../data/components/banner/banner.json";

const BannerLayout = () => {
  const banner = bannerData.banner;

  if (banner.isActive !== true) {
    return null;
  } else {
    return (
      <Banner
        title={banner.title}
        description={banner.description}
        isDescriptionLinkExternal={banner.isDescriptionLinkExternal}
      >
        {banner.linkLabel && banner.linkTarget && (
          <CustomLink
            label={banner.linkLabel}
            link={banner.linkTarget}
            isLinkExternal={banner.isLinkTargetExternal}
          />
        )}
      </Banner>
    );
  }
};

export default BannerLayout;
