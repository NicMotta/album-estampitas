import { map, atom } from 'nanostores'
import type { CardList } from "../utils/types";

export const $isOpen = atom<boolean>(false)
export const $isOpenAbout = atom<boolean>(false)

export const $cardSelected = map<CardList>({
  description: '',
  hash: '',
  title: '',
  haveIt: false,
  id: 0,
  image: '',
  cover: 'default'
})