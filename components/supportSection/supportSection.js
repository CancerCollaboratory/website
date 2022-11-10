import SupportNav from "../supportNav/supportNav";

const SupportSection = ({ children }) => {
  return (
    <>
      <SupportNav />
      {children}
    </>
  );
};

export default SupportSection;
