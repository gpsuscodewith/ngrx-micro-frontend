import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatalogState } from './catalog.state';

const getCatalogFeatureState = createFeatureSelector<CatalogState>("catalog");

export const getComics = createSelector(
  getCatalogFeatureState,
  state => state.comics
)
