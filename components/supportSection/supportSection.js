import SupportSideBar from "../supportSideBar/supportSideBar";

const SupportSection = ({ children }) => {
  return (
    <>
      <SupportSideBar />
      {children}
    </>
  );
};

export default SupportSection;
