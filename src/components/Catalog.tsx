import Card from "./Card";
import { CARD_LIST } from "../utils/constants";
import { $cardSelected, $isOpen } from "../utils/store"

export default function Catalog () {
  return (
    <div className="grid gap-4 max-w-3xl grid-cols-2 md:grid-cols-4 m-auto my-8 p-2">
      {
        CARD_LIST.map((card, index) => (
          <Card
            image={card.image}
            haveIt={card.haveIt}
            cover={card.cover}
            key={index}
            onClick={ () => {
              $cardSelected.set(card)
              $isOpen.set(true)
            }} />
          ))
      }
    </div>
  );
};