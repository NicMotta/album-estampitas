import SanMarcos from '../assets/estampitas/san-marcos.png'
import SanNicolas from '../assets/estampitas/san-nicolas.png'
import SantaEstefania from '../assets/estampitas/santa-estefania.png'
import SantaSarita from '../assets/estampitas/santa-sarita.png'
import type { CardList } from "../utils/types";

export const LOCAL_STORAGE_KEY = 'sb-xugzdunpluthnhpcngpg-auth-token'
export const TOTAL_CARDS = 12
export const UNKNOWN_CARD = '????'

export const CARD_LIST: CardList[] = [
  {
    id: 1,
    title: "San Marcos",
    description: "Estampita 1",
    image: SanMarcos,
    hash: "GI63RD",
    haveIt: true,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 2,
    title: "Santa Estefanía",
    description: "Estampita 2",
    image: SantaEstefania,
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: true,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 3,
    title: "Santa Sarita",
    description: "Estampita 3",
    image: SantaSarita,
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'alternative',
    type: 'frontend'
  },
  {
    id: 4,
    title: "San Nicolás",
    description: "Estampita 1",
    image: SanNicolas,
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: true,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 5,
    title: "San Franco",
    description: "Estampita 2",
    image: "../assets/estampitas/santa-estefania.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'so'
  },
  {
    id: 6,
    title: "San Martin",
    description: "Estampita 3",
    image: "../assets/estampitas/santa-sarita.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'alternative',
    type: 'FTL'
  },
  {
    id: 7,
    title: "San Elkin",
    description: "Estampita 1",
    image: "../assets/estampitas/san-marcos.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 8,
    title: "Santa Iara",
    description: "Estampita 2",
    image: "../assets/estampitas/santa-estefania.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'alternative',
    type: 'frontend'
  },
  {
    id: 9,
    title: "Santa Ruth",
    description: "Estampita 3",
    image: "../assets/estampitas/santa-sarita.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'alternative',
    type: 'funcional'
  },
  {
    id: 10,
    title: "Santa Catalina",
    description: "Estampita 1",
    image: "../assets/estampitas/san-marcos.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 11,
    title: "Santa Estefanía",
    description: "Estampita 2",
    image: "../assets/estampitas/santa-estefania.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 12,
    title: "Santa Sarita",
    description: "Estampita 3",
    image: "../assets/estampitas/santa-sarita.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  }
]