import { getCoverImage } from "../../utils/helpers";
import type { CardList } from "../../utils/types";
import styles from "./styles.module.css";
import { UNKNOWN_CARD, UNKNOWN_TYPE } from "../../utils/constants";

interface CardProps {
  image: string;
  haveIt: boolean;
  cover: CardList['cover'];
  number: number;
  type: string;
  binary: string
  onClick: () => void;
}

export default function Card({ image, haveIt, onClick, cover, type, binary }: CardProps) {
  return (
    <div className={styles.cardWrapper} onClick={onClick}>
      <img
        className={styles.cardImage}
        src={haveIt ? image : getCoverImage(cover)}
        alt=""
      />
      <div className={styles.cardProps}>
        <h5 className={styles.cardNumber}>{haveIt ? binary : UNKNOWN_CARD}</h5>
        <h5 className={styles.cardType}>{haveIt ? type : UNKNOWN_TYPE}</h5>
      </div>
    </div>
  );
}
