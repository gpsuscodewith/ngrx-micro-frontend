import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatalogState } from './state/catalog.state';

const getCatalogFeatureState = createFeatureSelector<CatalogState>("catalog");

export const getComics = createSelector(
  getCatalogFeatureState,
  state => {
    console.log('Inside getComics selector with a value of ' + state.currentComicIssueNumber);
    console.log('Return an array of comics with a length of ' + state.comics.length);
    return state.comics;
  }
);

export const getCurrentComicIssueNumber = createSelector(
  getCatalogFeatureState,
  state => state.currentComicIssueNumber
);

export const getSelectedComic = createSelector(
  getCatalogFeatureState,
  getCurrentComicIssueNumber,
  (state, currentIssueNumber) => {
    return currentIssueNumber ? state.comics.find(c => c.issueNumber === currentIssueNumber) : null;
  }
)
