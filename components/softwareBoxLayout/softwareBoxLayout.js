import clsx from "clsx";
import SoftwareBox from "../../components/softwareBox/softwareBox";
import utilStyles from "../../styles/utils.module.scss";

const SoftwareBoxLayout = ({ SoftwareBoxes }) => {
  if (!SoftwareBoxes) {
    return null;
  } else {
    return (
      <div className={clsx(utilStyles.flexDirectionColumn, utilStyles.outerContainerWidth)}>
        {SoftwareBoxes.map((box, index) => (
          <SoftwareBox
            title={box.title}
            boards={box.boards}
            hasBackground={box.hasBackground}
            hasBorderBottom={box.hasBorderBottom}
            key={index}
          />
        ))}
      </div>
    );
  }
};

export default SoftwareBoxLayout;
