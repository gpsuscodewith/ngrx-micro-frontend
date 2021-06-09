import { Comic } from "./Comic";

export interface CatalogState{
  comics: Comic[];
}

export const initialState: CatalogState = {
  comics: []
}
