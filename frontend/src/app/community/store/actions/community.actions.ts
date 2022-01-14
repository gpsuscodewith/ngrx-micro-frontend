import { Action, props, createAction } from '@ngrx/store';
//import { create } from 'domain';
import { Collector } from '../../model/collector.model';

export const loadCollectors = createAction(
  '[Community] Load Collectors'
);

export const loadCollectorsSuccess = createAction(
  '[Community] Load Collectors Success',
  props<{ collectors: Collector[] }>()
);

export const loadCollectorsFailure = createAction(
  '[Community] Load Collectors Failure',
  props<{ error: string  }>()
);

export const filterCollectorById = createAction(
  '[Community] Filter Collectors By Id',
  props<{ collectorId: string  }>()
);

export const loadProposer = createAction(
  '[Community] Load Proposer Id ',
  props< { proposerId: string }>()
);

export const loadPartner = createAction(
  '[Community] Load Partner Id ',
  props< { partnerId: string }>()
);

export const filterCollectorsByIdSuccess = createAction(
  '[Community] Filter Collectors By Id Success',
  props<{ collector: Collector }>()
);

export const filterCollectorsByIdFailure = createAction(
  '[Community] Filter Collectors By Id Failure',
  props<{ error: string  }>()
);

export const filterCollectorsByComic = createAction(
  '[Community] Filter Collectors By Comic',
  props<{ comic: string  }>()
);

export const filterCollectorsByComicSuccess = createAction(
  '[Community] Filter Collectors By Comic Success',
  props<{ collectors: Collector[] }>()
);

export const filterCollectorsByComicFailure = createAction(
  '[Community] Filter Collectors By Comic Failure',
  props<{ error: string  }>()
);

export const filterComicsByCollector = createAction(
  '[Community] Filter Comics By Collector',
  props<{ collector: string }>()
);
