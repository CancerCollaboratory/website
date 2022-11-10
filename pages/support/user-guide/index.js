import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportSection from "../../../components/supportSection/supportSection";

const UserGuide = () => {
  return;
};

export default UserGuide;

UserGuide.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportSection>{page}</SupportSection>
    </SupportLayout>
  );
};
