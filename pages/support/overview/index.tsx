import clsx from "clsx";
import ResourceCard from "../../../components/resourceCard/resourceCard";
import SupportLayout from "../../../components/supportLayout/supportLayout";
import pageData from "../../../data/pages/support/overview.json";
import styles from "../../../components/supportLayout/supportLayout.module.scss";

const Card = (data) => (
  <div className={styles.card}>
    <ResourceCard {...data} />
  </div>
);

const SupportOverview = () => (
  <div>
    <h1>Support Overview</h1>
    <h2>User Guides</h2>
    <div className={clsx(styles.cardCont)}>
      {pageData.sections.userGuides.map((data) => (
        <Card {...data} />
      ))}
    </div>
    <h2>Other Helpful Resources</h2>
    <div className={clsx(styles.cardCont)}>
      {pageData.sections.resources.map((data) => (
        <Card {...data} />
      ))}
    </div>
  </div>
);

export default SupportOverview;

SupportOverview.getLayout = function getLayout(page) {
  return <SupportLayout>{page}</SupportLayout>;
};
