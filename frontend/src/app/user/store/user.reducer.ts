import { createReducer, on } from "@ngrx/store";
import { UserState, initialState } from './user.state';
import { getCurrentUser, loadUsersSuccess, findByUsernameSuccess } from './actions/user.actions'

export const userReducer = createReducer<UserState>(
    initialState,
    on(getCurrentUser, (state, action): UserState => {
        return {
          ...state
        }
    }),
    on(loadUsersSuccess, (state, action): UserState => {
          return {
            ...state,
            currentUser: action.users[0]
          }
    }),
    on(findByUsernameSuccess, (state, action): UserState => {
          return {
            ...state,
            currentUser: action.user
          }
    })
);




