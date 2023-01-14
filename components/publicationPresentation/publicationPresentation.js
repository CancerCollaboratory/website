import Image from "next/image";
import styles from "./publicationPresentation.module.scss";
import { RESEARCH_OUTPUT_TYPES } from "../../lib/constants";

const PublicationPresentation = ({
  author,
  title,
  source,
  pmid,
  link,
  speaker,
  date,
  meeting,
  type = RESEARCH_OUTPUT_TYPES.publication,
}) => {
  return type === RESEARCH_OUTPUT_TYPES.publication ? (
    <>
      <div className={styles.container}>
        <div className={styles.label}>
          <Image
            src="/assets/resourceCard/icon-documentation.svg"
            alt="Publication"
            className={styles.icon}
            quality={100}
            width={20}
            height={20}
          />
          <span>Publication</span>
        </div>
        <div className={styles.body}>
          <p className={styles.author}>{author}</p>
          <a
            href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}/`}
            target="_blank"
            rel="noreferrer"
            className={styles.title}
          >
            {title}
          </a>
          <p className={styles.source}>{source}</p>
        </div>
      </div>
    </>
  ) : type === RESEARCH_OUTPUT_TYPES.presentation ? (
    <>
      <div className={styles.container}>
        <div className={styles.label}>
          <Image
            src="/assets/resourceCard/icon-video.svg"
            alt="Presentation"
            className={styles.icon}
            quality={100}
            width={20}
            height={20}
          />
          <span>Presentation</span>
        </div>
        <div className={styles.body}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.title}
          >
            {title}
          </a>
          <p className={styles.source}>Speaker: {speaker} | Date: {date}</p>
          {meeting && <p className={styles.source}>Meeting: {meeting}</p>}
        </div>
      </div>
    </>
  ) : null;
};

export default PublicationPresentation;
