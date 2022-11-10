import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportSection from "../../../components/supportSection/supportSection";

const FrequentlyAskedQuestions = () => {
  return;
};

export default FrequentlyAskedQuestions;

FrequentlyAskedQuestions.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportSection>{page}</SupportSection>
    </SupportLayout>
  );
};
