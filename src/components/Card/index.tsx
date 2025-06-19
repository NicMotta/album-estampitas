import { getCoverImage } from "../../utils/helpers";
import type { CardList } from "../../utils/types";
import styles from "./styles.module.css";
import { UNKNOWN_CARD } from "../../utils/constants";

interface CardProps {
  image: string;
  haveIt: boolean;
  cover: CardList['cover'];
  number: number;
  binary: string
  onClick: () => void;
}

export default function Card({ image, haveIt, onClick, cover, binary }: CardProps) {
  return (
    <div className={styles.cardWrapper} onClick={onClick}>
      <img
        className={`${styles.cardImage} ${!haveIt && styles.cardImageEmpty}`}
        src={haveIt ? image : getCoverImage(cover)}
        alt=""
      />
      <div className={styles.cardProps}>
        <h5 className={styles.cardNumber}>{haveIt ? binary : UNKNOWN_CARD}</h5>
      </div>
    </div>
  );
}
