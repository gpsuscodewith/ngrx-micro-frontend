import { Action, props, createAction } from '@ngrx/store';
import { Collector } from '../model/collector.model';

export const getCollectors = createAction(
  '[Community] Get Collectors'
);

export const setCollectors = createAction(
  '[Community] Set Collectors',
  props<{collectors: Collector[]}>()
);

export const loadCollectors = createAction(
  '[Community] Load Collectors'
);

export const loadCollectorsSuccess = createAction(
  '[Community] Load Collectors Success',
  props<{ comics: Collector[] }>()
);

export const loadComicsFailure = createAction(
  '[Community] Load Collectors Failure',
  props<{ error: string  }>()
);
