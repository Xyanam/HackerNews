export interface INews {
  deleted: boolean;
  title: string;
  id: number;
  time: string;
  by: string;
  rating: number;
  descendants: number;
  kids: number[];
  score: number;
  type: string;
  url: string;
  text: string;
  parent: number;
}
