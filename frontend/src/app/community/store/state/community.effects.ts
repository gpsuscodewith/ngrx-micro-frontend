import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CommunityService } from '../../community.service'
import { CommunityActions } from '../actions';

@Injectable()
export class CommunityEffects {
  constructor(private actions$: Actions, private communityService: CommunityService) { }

  loadCollectors$ = createEffect(() => {
    console.log('Inside the effects call to loadCollectors$');
    return this.actions$
      .pipe(
        ofType(CommunityActions.loadCollectors),
        mergeMap(() => this.communityService.getCollectors()
          .pipe(
            map(collectors => CommunityActions.loadCollectorsSuccess({collectors})),
            catchError(error => of(CommunityActions.loadComicsFailure({error})))
          )
        )
      );
  });
}
