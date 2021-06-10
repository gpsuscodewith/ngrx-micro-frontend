import { Action, props, createAction } from '@ngrx/store';
import { Collector } from '../model/collector.model';

export const getCollectors = createAction(
  '[catalog] Get Collectors'
);

export const setCollectors = createAction(
  '[catalog] Set Collectors',
  props<{collectors: Collector[]}>()
);
