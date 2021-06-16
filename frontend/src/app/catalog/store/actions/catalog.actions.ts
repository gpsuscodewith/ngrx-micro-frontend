import { Action, createAction, props } from '@ngrx/store';
import { Comic } from '../../model/comic.model';

export const loadComicsSuccess = createAction(
  '[Catalog] Load Comics Success',
  props<{ comics: Comic[] }>()
);

export const loadComicsFailure = createAction(
  '[Catalog] Load Comics Failure',
  props<{ error: string  }>()
);

export const loadComics = createAction(
  '[catalog] Load Comics'
);

export const createComic = createAction(
  '[catalog] Create Comic',
  props<{comic: Comic}>()
);

export const createComics = createAction(
  '[catalog] Create Comics',
  props<{comics: Comic[]}>()
);
