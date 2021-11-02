import { createFeatureSelector, createSelector} from '@ngrx/store';
import { zip } from 'rxjs';
import { User } from '../model/user.model';
import { UserState } from './user.state';

const getUserFeatureState = createFeatureSelector<UserState>("user");

export const getUser = createSelector(
  getUserFeatureState,
  state => {
    console.log('Inside getUsers selector with a value of ' + state.currentUser);
    return state.currentUser;
  }
);

