import { createFeatureSelector, createSelector } from '@ngrx/store';
import { zip } from 'rxjs';
import { AppState} from './state/app.state';

export const selectAppState = (state: AppState) => state;

export const getIsLoggedInSel = createSelector(
  selectAppState,
  (appState: AppState) => appState.isLoggedIn
);
