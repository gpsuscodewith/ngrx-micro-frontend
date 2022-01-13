import { Action, props, createAction } from '@ngrx/store';

export const getIsLoggedIn = createAction(
  '[App] Get Is Logged In'
);

export const loggedInSuccess = createAction(
  '[App] Logged In Success'
);

export const loggedInFailure = createAction(
  '[App] Logged In Failure',
  props<{ error: string  }>()
);
