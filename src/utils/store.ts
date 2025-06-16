import { map, atom } from 'nanostores'
import type { CardList, UserData } from "../utils/types";

export const $isOpen = atom<boolean>(false)
export const $isOpenAbout = atom<boolean>(false)
export const $isOpenAddCard = atom<boolean>(false)
export const $isOpenIdea = atom<boolean>(false)
export const $isLoading = atom<boolean>(false)
export const $isExploding = atom<boolean>(true)

export const $cardSelected = map<CardList>({
  description: '',
  hash: '',
  title: '',
  haveIt: false,
  id: 0,
  image: '',
  cover: 'default',
  type: '',
  binary: ''
})

export const $user = map<UserData>({
  email: '',
  id: ''
})