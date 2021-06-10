import { Action, createAction, props } from '@ngrx/store';
import { Comic } from '../model/comic.model';
/*
export enum CatalogActionTypes {
  GetComics = '[catalog] Get Comics',
  SetComics = '[catalog] Set Comics'
}

export class GetComics implements Action {
  readonly type = CatalogActionTypes.GetComics;
  constructor() {}
}

export class SetComics implements Action {
  readonly type = CatalogActionTypes.SetComics;
  constructor(public payload: any) {}
}

export type CatalogActions = GetComics | SetComics;
*/
export const getComics = createAction(
  '[catalog] Get Comics'
);

export const setComics = createAction(
  '[catalog] Set Comics',
  props<{comics: Comic[]}>()
);
