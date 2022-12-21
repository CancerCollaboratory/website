import clsx from "clsx";
import SoftwareBox from "../../components/softwareBox/softwareBox";
import utilStyles from "../../styles/utils.module.scss";

const SoftwareBoxLayout = ({ SoftwareBoxes }) => {
  if (!SoftwareBoxes) {
    return null;
  } else {
    return (
      <div
        className={clsx(
          utilStyles.flexDirectionColumn,
          utilStyles.defaultElementMarginBottom,
          utilStyles.outerContainerWidth
        )}
      >
        {SoftwareBoxes.map((box, index) => (
          <SoftwareBox title={box.title} boards={box.boards} key={index} />
        ))}
      </div>
    );
  }
};

export default SoftwareBoxLayout;
