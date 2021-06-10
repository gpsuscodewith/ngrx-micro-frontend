import { createReducer, on } from '@ngrx/store';
import { getComics, setComics } from './catalog.actions';
import { CatalogState, initialState } from './catalog.state';

export const catalogReducer = createReducer<CatalogState>(
  initialState,
  on(getComics, (state): CatalogState => {
    return {
      ...state,
    }
  }),
  on(setComics, (state, action): CatalogState => {
    return {
      ...state,
      comics: action.comics
    }
  })
);
