import CoverDefault from "../assets/estampitas/cover.png";
import CoverAlt from "../assets/estampitas/cover-alt.png";
import type { CardList } from "../utils/types";

export const getCoverImage = (cover: CardList['cover']) => {
  switch (cover) {
    case 'default':
      return CoverDefault;
    case 'alternative':
      return CoverAlt;
    default:
      return CoverDefault;
  }
}