import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatalogService } from '../catalog.service';
import { CatalogActions} from './actions';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogEffects {
  constructor(private actions$: Actions, private catalogService: CatalogService) { }

  loadComics$ = createEffect(() => {
    console.log('Inside the effects call to loadComics$');
    return this.actions$
      .pipe(
        ofType(CatalogActions.loadComics),
        mergeMap(() => this.catalogService.getComics()
          .pipe(
            map(comics => CatalogActions.loadComicsSuccess({comics})),
            catchError(error => of(CatalogActions.loadComicsFailure({error})))
          )
        )
      );
  });

  searchComics$ = createEffect(() => {
    console.log('Inside the effects call to loadComics$');
    return this.actions$
      .pipe(
        ofType(CatalogActions.searchComics),
        mergeMap(action => this.catalogService.getSearchedComics(action.searchQuery)
          .pipe(
            map(comics => CatalogActions.searchComicsSuccess({comics})),
            catchError(error => of(CatalogActions.searchComicsFailure({error})))
          )
        )
      )
  });
}
