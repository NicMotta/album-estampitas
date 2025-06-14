import styles from "./styles.module.css";
import Card from "../Card";
import { CARD_LIST } from "../../utils/constants";
import { $cardSelected, $isOpen } from "../../utils/store";

export default function Catalog() {
  return (
    <div className={styles.catalogGrid}>
      {CARD_LIST.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          haveIt={card.haveIt}
          cover={card.cover}
          number={card.id}
          type={card.type}
          onClick={() => {
            $cardSelected.set(card);
            $isOpen.set(true);
          }}
        />
      ))}
    </div>
  );
}
