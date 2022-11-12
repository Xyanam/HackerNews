import { INews } from "./INews";

export interface INewsState {
  newsId: number[];
  allNews: INews[];
  news: INews;
  loading: boolean;
  error: string | null;
}
