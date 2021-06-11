import { User } from '../model/user.model'
export interface UserState {
    currentUser: User ;
}

export const initialState: UserState = {
    currentUser: null
  }