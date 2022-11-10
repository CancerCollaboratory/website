import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportSection from "../../../components/supportSection/supportSection";

const SupportOverview = () => {
  return;
};

export default SupportOverview;

SupportOverview.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportSection>{page}</SupportSection>
    </SupportLayout>
  );
};
