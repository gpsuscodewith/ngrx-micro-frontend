import { Comic } from "../../model/comic.model";

export interface CatalogState{
  currentComicIssueNumber: string | null;
  comics: Comic[];
}

export const initialState: CatalogState = {
  currentComicIssueNumber: null,
  comics: []
}
