import clsx from "clsx";
import ResourceCard from "../resourceCard/resourceCard";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./cardLayout.module.scss";

const CardLayout = ({ cards }) => {
  return (
    <div className={clsx(styles.cardLayout, utilStyles.outerContainer)}>
      {cards.map((card, index) => (
        <ResourceCard
          title={card.title}
          isTitleLinkExternal={card.isTitleLinkExternal}
          bodyText={card.bodyText}
          imageSrcPath={card.imageSrcPath}
          imageAlt={card.imageAlt}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardLayout;
