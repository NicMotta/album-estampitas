import CoverDefault from "../assets/estampitas/cover.png";
import CoverAlt from "../assets/estampitas/cover-alt.png";
import type { CardList } from "../utils/types";
import { LOCAL_STORAGE_KEY } from "./constants";

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

export function isAuthenticated() {
  return localStorage.getItem(LOCAL_STORAGE_KEY) !== null;
}