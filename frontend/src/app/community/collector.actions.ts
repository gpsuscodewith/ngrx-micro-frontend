import { Action } from '@ngrx/store';

export enum CollectorActionTypes {
  GetCollectors = '[collector] Get Collectors',
  SetCollectors = '[collector] Set Collectors'
}

export class GetCollectors implements Action {
  readonly type = CollectorActionTypes.GetCollectors;
  constructor() {}
}

export class SetCollectors implements Action {
  readonly type = CollectorActionTypes.SetCollectors;
  constructor(public payload: any) {}
}

export type CommunityActions = GetCollectors | SetCollectors;
