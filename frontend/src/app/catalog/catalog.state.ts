import { Comic } from "./comic.model";

export interface CatalogState{
  comics: Comic[];
}

export const initialState: CatalogState = {
  comics: []
}
