import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportSection from "../../../components/supportSection/supportSection";

const GettingStarted = () => {
  return;
};

export default GettingStarted;

GettingStarted.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportSection>{page}</SupportSection>
    </SupportLayout>
  );
};
