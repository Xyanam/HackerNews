import { INews } from "./INews";

export interface ICommentsState {
  comments: INews[];
  loadingCom: boolean;
  error: string | null;
}
