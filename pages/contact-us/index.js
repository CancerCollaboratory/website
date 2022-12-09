import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import HeroCard from "../../components/heroCard/heroCard";
import CallToAction from "../../components/callToAction/callToAction";
import pageData from "../../data/pages/contact/contact-us.json";
import utilStyles from "../../styles/utils.module.scss";

const ContactUs = () => {
  const jumbotron = pageData.jumbotron;
  const lateralColumn = pageData.lateralColumn;
  const callToAction = pageData.callToAction;

  return (
    <>
      <Jumbotron title={jumbotron?.title} />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          leftColumn={
            <LeftColumn>
              <HeroCard
                title={lateralColumn?.leftColumn?.heroCard?.title}
                imageSrcPath={lateralColumn?.leftColumn?.heroCard?.image?.srcPath}
                imageAlt={lateralColumn?.leftColumn?.heroCard?.image?.alt}
                body={lateralColumn?.leftColumn?.heroCard?.body}
              />
            </LeftColumn>
          }
          rightColumn={
            <RightColumn>
              <HeroCard
                title={lateralColumn?.rightColumn?.heroCard?.title}
                imageSrcPath={lateralColumn?.rightColumn?.heroCard?.image?.srcPath}
                imageAlt={lateralColumn?.rightColumn?.heroCard?.image?.alt}
                body={lateralColumn?.rightColumn?.heroCard?.body}
                button={lateralColumn?.rightColumn?.heroCard?.button}
                hasBackground={lateralColumn?.rightColumn?.heroCard?.hasBackground}
              />
            </RightColumn>
          }
          hasBorderBottom={lateralColumn?.hasBorderBottom}
        />
        <CallToAction
          title={callToAction?.title}
          imageSrcPath={callToAction?.imageSrcPath}
          imageAlt={callToAction?.imageAlt}
          description={callToAction?.description}
          buttonData={callToAction?.buttonData}
        />
      </div>
    </>
  );
};

export default ContactUs;
