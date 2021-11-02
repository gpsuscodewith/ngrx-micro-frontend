import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service'
import { UserActions } from './actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) { }

  loadUsers$ = createEffect(() => {
    console.log('Inside the effects call to loadUsers$');
    return this.actions$
      .pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() => this.userService.getUsers()
          .pipe(
            map(users => UserActions.loadUsersSuccess({users})),
            catchError(error => of(UserActions.loadUsersFailure({error})))
          )
        )
      );
  });

  loadUserByUsername$ = createEffect(() => {
    console.log('Inside the effects call to loadUserByUsername$');
    return this.actions$
      .pipe(
        ofType(UserActions.findUserByUsername),
        mergeMap(action => this.userService.getUserFromUsername(action.userName)
          .pipe(
            map(user => UserActions.findByUsernameSuccess({user})),
            catchError(error => of(UserActions.loadUsersFailure({error})))
          )
        )
      )
  });
}
