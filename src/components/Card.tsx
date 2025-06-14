import { getCoverImage } from "../utils/helpers";
import type { CardList } from "../utils/types";

interface CardProps {
  image: string;
  haveIt: boolean;
  cover: CardList['cover'];
  onClick: () => void;
}

export default function Card({ image, haveIt, onClick, cover }: CardProps) {

  return (
    <div className="w-44" onClick={onClick}>
      <img
        className="rounded-lg shadow hover:scale-105 transition duration-100 ease-in-out"
        src={haveIt ? image : getCoverImage(cover)}
        alt=""
      />
    </div>
  );
}
