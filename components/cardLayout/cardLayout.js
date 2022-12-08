import ResourceCard from "../resourceCard/resourceCard";
import styles from "./cardLayout.module.scss";

const CardLayout = ({ cards }) => {
  return (
    <div className={styles.cardLayout}>
      {cards.map((card, index) => (
        <ResourceCard
          title={card.title}
          isTitleLinkExternal={card.isTitleLinkExternal}
          bodyText={card.bodyText}
          imageSrcPath={card.imageSrcPath}
          imageAlt={card.imageAlt}
          isLastCard={card.isLastCard}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardLayout;
