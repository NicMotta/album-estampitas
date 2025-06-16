import styles from "./styles.module.css";
import Card from "../Card";
import { CARD_LIST } from "../../utils/constants";
import { $cardSelected, $isOpen } from "../../utils/store";
import Mancheta from "../ui/Mancheta";

export default function Catalog() {
  return (
    <div className={styles.catalogContainer}>
      <div className={styles.catalogGrid}>
        {CARD_LIST.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            haveIt={card.haveIt}
            cover={card.cover}
            number={card.id}
            type={card.type}
            binary={card.binary}
            onClick={() => {
              $cardSelected.set(card);
              $isOpen.set(true);
            }}
          />
        ))}
      </div>
      <Mancheta text="¿Buscás más estampitas? Próximamente, siempre estamos desarrollando nuevas. Si querés la tuya, escribinos." color="yellow" className={styles.mancheta}/>
    </div>
  );
}
