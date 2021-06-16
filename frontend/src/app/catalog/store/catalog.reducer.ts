import { createReducer, on } from '@ngrx/store';
import { loadComics, createComics, loadComicsSuccess } from './actions/catalog.actions';
import { CatalogState, initialState } from './state/catalog.state';

export const catalogReducer = createReducer<CatalogState>(
  initialState,
  on(loadComics, (state): CatalogState => {
    console.log('Inside reducer with loadComics and the state is ' + state);
    return {
      ...state,
    }
  }),
  on(loadComicsSuccess, (state, action): CatalogState => {
    return {
      ...state,
      comics: action.comics,
    }
  }),
  on(createComics, (state, action): CatalogState => {
    return {
      ...state,
      comics: action.comics
    }
  })
);
