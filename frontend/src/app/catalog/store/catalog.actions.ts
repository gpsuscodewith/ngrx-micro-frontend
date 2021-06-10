import { Action, createAction, props } from '@ngrx/store';
import { Comic } from '../model/comic.model';

export const getComics = createAction(
  '[catalog] Get Comics'
);

export const setComics = createAction(
  '[catalog] Set Comics',
  props<{comics: Comic[]}>()
);
