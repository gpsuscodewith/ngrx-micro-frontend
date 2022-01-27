import { ComicValue } from "../../model/comic-value.model";
import { Comic } from "../../model/comic.model";

export interface CatalogState{
  currentComicIssueNumber: string | null;
  comics: Comic[];
  comicValues: ComicValue[];
}

export const initialState: CatalogState = {
  currentComicIssueNumber: null,
  comics: [],
  comicValues: []
}
