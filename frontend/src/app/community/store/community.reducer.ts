import { createReducer, on } from "@ngrx/store";
import { loadCollectors , loadCollectorsSuccess, loadCollectorsFailure, filterCollectorsByComicSuccess, loadProposerId, loadPartnerId } from "./actions/community.actions";
import { CommunityState, initialState } from "./state/community.state";

export const communityReducer = createReducer<CommunityState>(
  initialState,
  on(loadCollectors, (state): CommunityState => {
    console.log('Inside reducer with loadCollectors and the state is ' + state);
    return {
      ...state,
    }
  }),
  on(loadCollectorsSuccess, (state, action): CommunityState => {
    return {
      ...state,
      collectors: action.collectors
    }
  }),
  on(filterCollectorsByComicSuccess, (state, action): CommunityState => {
    return {
      ...state,
      collectors: action.collectors
    }
  }),
  on(loadProposerId, (state, action): CommunityState => {
    return {
      ...state,
      tradeProposerId: action.proposerId
    }
  }),
  on(loadPartnerId, (state, action): CommunityState => {
    return {
      ...state,
      tradePartnerId: action.partnerId
    }
  }),
);

