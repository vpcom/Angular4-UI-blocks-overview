import { ShareItem } from './share-item';

export class Card {
  id: number;
  title: string;
  text: string;
  date: string;
  time: string;
  place: string;
  image: string;
  shareCollection: ShareItem[];
  mainColor: string;
  secondaryColor: string;
}