import { Action, props, createAction } from '@ngrx/store';
import { User } from '../model/user.model';


export const getCurrentUser = createAction(
  '[user] Get User'
);


