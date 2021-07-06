import { Action, props, createAction } from '@ngrx/store';
import { Collector } from '../../model/collector.model';

export const loadCollectors = createAction(
  '[Community] Load Collectors'
);

export const loadCollectorsSuccess = createAction(
  '[Community] Load Collectors Success',
  props<{ collectors: Collector[] }>()
);

export const loadComicsFailure = createAction(
  '[Community] Load Collectors Failure',
  props<{ error: string  }>()
);
