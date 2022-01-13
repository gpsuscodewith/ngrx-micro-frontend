import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "./state/app.state";
import { getIsLoggedIn, loggedInFailure, loggedInSuccess } from "./actions/app.actions"

export const appReducer = createReducer<AppState>(
  initialState,
  on(getIsLoggedIn, (state): AppState => {
    console.log('Inside reducer with getIsLoggedIn and the state is ' + state);
    return {
      ...state,
    }
  }),
  on(loggedInSuccess, (state): AppState => {
    console.log('Inside loggedInSuccess');
    return {
      ...state,
      isLoggedIn: true
    }
  }),
);
