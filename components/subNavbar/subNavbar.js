import SubNavbarItem from "../subNavbarItem/subNavbarItem";
import data from "../../content/components/navbarItems.json";
import "./subNav.module.scss";

const SubNavbar = () => {
  return (
    <div className={StyleSheet.subNavContainer}>
      {data.subNavbarItems.map((item, index) => (
        <SubNavbarItem navbarItem={item} key={index} />
      ))}
    </div>
  );
};

export default SubNavbar;
