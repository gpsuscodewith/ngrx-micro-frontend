import { Action, createAction, props } from '@ngrx/store';
import { ComicValue } from '../../model/comic-value.model';
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

export const loadComicValues = createAction(
  '[catalog] Load Comic Values'
);

export const loadComicValuesSuccess = createAction(
  '[Catalog] Load Comic Values Success',
  props<{ comicValues: ComicValue[] }>()
);

export const loadComicValuesFailure = createAction(
  '[Catalog] Load Comic Values Failure',
  props<{ error: string  }>()
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
