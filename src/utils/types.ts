export interface CardList {
  id: number;
  title: string;
  description: string;
  image: string;
  hash: string;
  haveIt: boolean;
  cover: 'default' | 'alternative'
}
