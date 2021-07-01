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

export const searchComicsSuccess = createAction(
  '[catalog] Search Comics Success',
  props<{comics: Comic[]}>()
)

export const searchComicsFailure = createAction(
  '[catalog] Search Comics Failure',
  props<{ error: string  }>()
)

export const searchComics = createAction(
  '[catalog] Search Comics',
  props<{ searchQuery: string }>()
)

export const selectComic = createAction(
  '[catalog] Select Comic',
  props<{ issueNumber: string }>()
)
