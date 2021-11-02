import { Action, props, createAction } from '@ngrx/store';
import { User } from '../../model/user.model';


export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string  }>()
)

export const getCurrentUser = createAction(
  '[user] Get User'
);

export const findUserById = createAction(
  '[User] Find User By Id',
  props<{ userId: string  }>()
);

export const findUserByUsername= createAction(
  '[User] Find User By Username',
  props<{ userName: string  }>()
);

export const findByUsernameSuccess = createAction(
  '[User] Find User By Username Success',
  props<{ user: User }>()
);


