import { Action } from '@ngrx/store';

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
