import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportSection from "../../../components/supportSection/supportSection";

const SystemStatus = () => {
  return;
};

export default SystemStatus;

SystemStatus.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportSection>{page}</SupportSection>
    </SupportLayout>
  );
};
