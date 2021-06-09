import { CollectorActionTypes, CommunityActions } from "./collector.actions";
import { CommunityState, initialState } from "./community.state";

export function reducer(state = initialState, action: CommunityActions): CommunityState {
  switch(action.type) {
    case CollectorActionTypes.SetCollectors:
      return { ...state, collectors: action.payload }
      break;
    default:
      return state;
      break;
  }
}
