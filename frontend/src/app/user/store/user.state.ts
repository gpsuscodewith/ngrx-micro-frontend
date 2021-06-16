import { User } from '../model/user.model'
export interface UserState {
    currentUser: User | null;
}

export const initialState: UserState = {
    currentUser: null
  }
