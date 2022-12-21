import clsx from "clsx";
import TabLayout from "../tabLayout/tabLayout";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./tabSection.module.scss";

const TabSection = ({ children }) => {
  if (!children) {
    return null;
  } else {
    return (
      <div
        className={clsx(
          styles.container,
          utilStyles.gradientBackgroundGray,
          utilStyles.containerBorderBottom,
          utilStyles.outerContainerVerticalPadding,
          utilStyles.outerContainerWidth
        )}
      >
        <div className={utilStyles.maxWidth}>
          <TabLayout />
        </div>
        <div className={clsx(styles.innerContainer, utilStyles.outerContainerHorizontalPadding)}>
          {children}
        </div>
      </div>
    );
  }
};

export default TabSection;
