import SupportLayout from "../../../components/supportLayout/supportLayout";
import SupportNav from "../../../components/supportNav/supportNav";

export default function BestPractices() {
  return <></>;
}

BestPractices.getLayout = function getLayout(page) {
  return (
    <SupportLayout>
      <SupportNav>{page}</SupportNav>
    </SupportLayout>
  );
};
