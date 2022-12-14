import ResourceCard from "../resourceCard/resourceCard";
import ListLine from "../listLine/listLine";
import styles from "./resourceCardLayout.module.scss";

const ResourceCardLayout = ({ cards }) => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => {
        if (!card.listLine) {
          return (
            <ResourceCard
              title={card.title}
              isTitleLinkExternal={card.isTitleLinkExternal}
              bodyText={card.bodyText}
              imageSrcPath={card.imageSrcPath}
              imageAlt={card.imageAlt}
              isLastCard={card.isLastCard}
              key={index}
            />
          );
        } else {
          return (
            <ResourceCard
              title={card.title}
              isTitleLinkExternal={card.isTitleLinkExternal}
              imageSrcPath={card.imageSrcPath}
              imageAlt={card.imageAlt}
              isLastCard={card.isLastCard}
              key={index}
            >
              <ListLine isVertical={card.listLine?.isVertical} items={card.listLine?.items} />
            </ResourceCard>
          );
        }
      })}
    </div>
  );
};

export default ResourceCardLayout;
