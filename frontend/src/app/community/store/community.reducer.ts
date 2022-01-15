import { Actions } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { loadCollectors , loadCollectorsSuccess, loadCollectorsFailure, filterCollectorsByComicSuccess, loadProposer, loadPartner } from "./actions/community.actions";
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
    console.log('Inside reducer loadCollectorsSuccess with a an action.collectors length of ' + action.collectors.length);
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
  on(loadProposer, (state, action): CommunityState => {
    console.log('loadProposer executed');
    return {
      ...state,
      tradeProposerId: action.proposerId
    }
  }),
  on(loadPartner, (state, action): CommunityState => {
    console.log('loadPartner executed');
    return {
      ...state,
      tradePartnerId: action.partnerId
    }
  }),
);

