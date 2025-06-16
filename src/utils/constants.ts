import SanMarcos from '../assets/estampitas/san-marcos.png'
import SanNicolas from '../assets/estampitas/san-nicolas.png'
import SantaEstefania from '../assets/estampitas/santa-estefania.png'
import SantaSarita from '../assets/estampitas/santa-sarita.png'
import SanPablo from '../assets/estampitas/san-pablo.png'
import SanFranco from '../assets/estampitas/san-franco.png'
import type { CardList } from "../utils/types";

export const LOCAL_STORAGE_KEY = 'sb-xugzdunpluthnhpcngpg-auth-token'
export const TOTAL_CARDS = 12
export const UNKNOWN_CARD = '?????'
export const UNKNOWN_TYPE = 'undefined'

export const CARD_LIST: CardList[] = [
  {
    id: 1,
    binary: '#0001',
    title: "San Marcos",
    description: "Estampita 1",
    image: SanMarcos,
    hash: "MC01FDKF",
    haveIt: true,
    cover: 'default',
    type: 'frontend developer'
  },
  {
    id: 2,
    binary: '#0010',
    title: "Santa Estefanía",
    description: "Estampita 2",
    image: SantaEstefania,
    hash: "ES02FDKX",
    haveIt: true,
    cover: 'default',
    type: 'frontend developer'
  },
  {
    id: 3,
    binary: '#0011',
    title: "Santa Sarita",
    description: "Estampita 3",
    image: SantaSarita,
    hash: "SS03FDRO",
    haveIt: false,
    cover: 'alternative',
    type: 'frontend developer'
  },
  {
    id: 4,
    binary: '#0100',
    title: "San Nicolás",
    description: "Estampita 1",
    image: SanNicolas,
    hash: "NM04FDXJ",
    haveIt: true,
    cover: 'default',
    type: 'frontend developer'
  },
  {
    id: 5,
    binary: '#0101',
    title: "San Franco",
    description: "Estampita 2",
    image: SanFranco,
    hash: "FT05TLRX",
    haveIt: false,
    cover: 'default',
    type: 'tech lead'
  },
  {
    id: 6,
    binary: '#0111',
    title: "San Pablo",
    description: "Estampita 3",
    image: SanPablo,
    hash: "PR07POXJ",
    haveIt: false,
    cover: 'alternative',
    type: 'product owner'
  },
  {
    id: 7,
    binary: '#1000',
    title: "San Pablo",
    description: "Estampita 1",
    image: "../assets/estampitas/san-marcos.png",
    hash: "as",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 8,
    binary: '#1001',
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
    binary: '#1010',
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
    binary: '#1011',
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
    binary: '#1100',
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
    binary: '#1101',
    title: "Santa Sarita",
    description: "Estampita 3",
    image: "../assets/estampitas/santa-sarita.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 12,
    binary: '#1101',
    title: "Santa Sarita",
    description: "Estampita 3",
    image: "../assets/estampitas/santa-sarita.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 12,
    binary: '#1101',
    title: "Santa Sarita",
    description: "Estampita 3",
    image: "../assets/estampitas/santa-sarita.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  },
  {
    id: 12,
    binary: '#1101',
    title: "Santa Sarita",
    description: "Estampita 3",
    image: "../assets/estampitas/santa-sarita.png",
    hash: "maSnnhuk8HigTN765GI63GI",
    haveIt: false,
    cover: 'default',
    type: 'frontend'
  }
]