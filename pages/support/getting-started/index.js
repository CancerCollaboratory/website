import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportNav from "../../../components/supportNav/supportNav";

const GettingStarted = () => {
  return;
};

export default GettingStarted;

GettingStarted.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportNav>{page}</SupportNav>
    </SupportLayout>
  );
};
