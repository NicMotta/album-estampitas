import { getCoverImage, binaryConvert } from "../../utils/helpers";
import type { CardList } from "../../utils/types";
import styles from "./styles.module.css";
import { UNKNOWN_CARD } from "../../utils/constants";

interface CardProps {
  image: string;
  haveIt: boolean;
  cover: CardList['cover'];
  number: number;
  type: string;
  onClick: () => void;
}

export default function Card({ image, haveIt, onClick, cover, number, type }: CardProps) {
  return (
    <div className={styles.cardWrapper} onClick={onClick}>
      <img
        className={styles.cardImage}
        src={haveIt ? image : getCoverImage(cover)}
        alt=""
      />
      <div className={styles.cardProps}>
        <p className={styles.cardNumber}>{haveIt ? binaryConvert(number) : UNKNOWN_CARD}</p>
        <p className={styles.cardType}>{haveIt ? type : UNKNOWN_CARD}</p>
      </div>
    </div>
  );
}
