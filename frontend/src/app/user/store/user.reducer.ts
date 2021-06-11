import { createReducer, on } from "@ngrx/store";
import { UserState, initialState } from './user.state';
import { getCurrentUser } from './user.actions'

export const userReducer = createReducer<UserState>(
    initialState,
    on(getCurrentUser, (state, action): UserState => {
        return {
          ...state
        }
      })
    );

