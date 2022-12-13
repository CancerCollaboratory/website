import Jumbotron from "../../components/jumbotron/jumbotron";
import HeroCard from "../../components/heroCard/heroCard";
import CallToAction from "../../components/callToAction/callToAction";
import utilStyles from "../../styles/utils.module.scss";
import pageData from "../../data/pages/services/services-request-account.json";

const RequestAccount = () => {
  const jumbotron = pageData.jumbotron;
  const heroCard = pageData.heroCard;
  const callToAction = pageData.callToAction;

  return (
    <>
      <Jumbotron title={jumbotron?.title} bodyText={jumbotron?.body?.text} />
      <div className={utilStyles.pageBodyContainer}>
        <HeroCard
          title={heroCard?.title}
          imageSrcPath={heroCard?.image?.srcPath}
          imageAlt={heroCard?.image?.alt}
          body={heroCard?.body}
          button={heroCard?.button}
        />
        <CallToAction
          description={callToAction?.description}
          isDescriptionLinkExternal={callToAction?.isDescriptionLinkExternal}
        />
      </div>
    </>
  );
};

export default RequestAccount;
