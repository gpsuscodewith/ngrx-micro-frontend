import { createReducer, on } from '@ngrx/store';
import { loadComics, createComics, loadComicsSuccess, searchComics, searchComicsSuccess } from './actions/catalog.actions';
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
  }),
  on(searchComics, (state): CatalogState => {
    return {
      ...state,
    }
  }),
  on(searchComicsSuccess, (state, action): CatalogState => {
    return {
      ...state,
      comics: action.comics,
    }
  }),
);
