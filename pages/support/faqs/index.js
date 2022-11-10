import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportNav from "../../../components/supportNav/supportNav";

const FrequentlyAskedQuestions = () => {
  return;
};

export default FrequentlyAskedQuestions;

FrequentlyAskedQuestions.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportNav>{page}</SupportNav>
    </SupportLayout>
  );
};
