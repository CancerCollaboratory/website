import { useState } from "react";
import clsx from "clsx";
import Jumbotron from "../../../components/jumbotron/jumbotron";
import CallToAction from "../../../components/callToAction/callToAction";
import PublicationPresentation from "../../../components/publicationPresentation/publicationPresentation";
import { ActionButton } from "../../../components/button/button";
import pageData from "../../../data/pages/research/outputs/outputs.json";
import utilStyles from "../../../styles/utils.module.scss";
import pageStyles from "./index.module.scss";
import { RESEARCH_OUTPUT_TYPES } from "../../../lib/constants";
import Publication from "../../../components/publication/publication";

const ResearchOutputs = () => {
  const [expanded, setExpanded] = useState(false);
  const jumbotron = pageData.jumbotron;
  const publicationInstructions = pageData.publicationInstructions;
  const publicationsSectionTitle = pageData.publicationsSection.title;
  const publications = pageData.publications;
  const presentations = pageData.presentations;
  const singlePublication = pageData.singlePublication;

  return (
    <>
      <Jumbotron title={jumbotron?.title} bodyText={jumbotron?.body?.text} />
      <div className={utilStyles.pageBodyContainer}>
        <CallToAction description={publicationInstructions} />
        <div
          className={clsx(
            utilStyles.containerBorderTop,
            utilStyles.pageBodyContainer,
            utilStyles.innerContainerPadding,
            utilStyles.outerContainerWidth
          )}
        >
          <h2
            className={clsx(utilStyles.defaultElementLineHeight, utilStyles.altElementMarginBottom)}
          >
            {publicationsSectionTitle}
          </h2>

          <div className={pageStyles.singlePublicationCont}>
            <Publication
              imageSrcPath={singlePublication.imageSrcPath}
              imageAlt={singlePublication.imageAlt}
              title={singlePublication.title}
              titleLink={singlePublication.titleLink}
              isTitleLinkExternal={singlePublication.isTitleLinkExternal}
              caption={singlePublication.caption}
              isCaptionLinkExternal={singlePublication.isCaptionLinkExternal}
            />
          </div>

          {publications.map((publication, index) =>
            expanded || index < 2 ? (
              <PublicationPresentation
                key={`publication-${index}`}
                author={publication.author}
                title={publication.title}
                source={publication.source}
                pmid={publication.pmid}
              />
            ) : null
          )}
          {presentations.map((presentation, index) =>
            expanded || index < 1 ? (
              <PublicationPresentation
                key={`presentation-${index}`}
                type={RESEARCH_OUTPUT_TYPES.presentation}
                title={presentation.title}
                link={presentation.link}
                speaker={presentation.speaker}
                date={presentation.date}
                meeting={presentation.meeting}
              />
            ) : null
          )}
          <ActionButton
            clickHandler={() => setExpanded(!expanded)}
            label={expanded ? <>Collapse List&nbsp;&nbsp;&minus;</> : <>Expand List&nbsp;&nbsp;+</>}
          />
        </div>
      </div>
    </>
  );
};

export default ResearchOutputs;
