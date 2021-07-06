import { createReducer, on } from "@ngrx/store";
import { loadCollectors , loadCollectorsSuccess, loadComicsFailure } from "./actions/community.actions";
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
  })
);
