import { CatalogActionTypes, CatalogActions } from './catalog.actions';
import { CatalogState, initialState } from './catalog.state';

export function reducer(state = initialState, action: CatalogActions): CatalogState {
  switch(action.type) {
    case CatalogActionTypes.SetComics:
      return { ...state, comics: action.payload }
      break;
    default:
      return state;
      break;
  }
}
