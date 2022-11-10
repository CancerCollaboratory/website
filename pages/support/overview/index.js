import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportNav from "../../../components/supportNav/supportNav";

const SupportOverview = () => {
  return;
};

export default SupportOverview;

SupportOverview.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportNav>{page}</SupportNav>
    </SupportLayout>
  );
};
