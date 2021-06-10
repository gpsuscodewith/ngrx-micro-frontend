import { Comic } from "../model/comic.model";

export interface CatalogState{
  comics: Comic[];
}

export const initialState: CatalogState = {
  comics: []
}
