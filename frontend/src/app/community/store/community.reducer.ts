import { createReducer, on } from "@ngrx/store";
import { getCollectors, setCollectors } from "./collector.actions";
import { CommunityState, initialState } from "./community.state";

export const communityReducer = createReducer<CommunityState>(
  initialState,
  on(getCollectors, (state): CommunityState => {
    return {
      ...state,
    }
  }),
  on(setCollectors, (state, action): CommunityState => {
    return {
      ...state,
      collectors: action.collectors
    }
  })
);
