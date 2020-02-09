import { RootAction } from 'StoreTypes';

import { movieDetailsActionTypes } from './actions';
import { MovieDetailsState } from './types';

export const initialState: MovieDetailsState = {
  fetchingMovie: false
};

export default function(state = initialState, action: RootAction): MovieDetailsState {
  switch (action.type) {
    case movieDetailsActionTypes.FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        fetchingMovie: true
      };
    case movieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetchingMovie: false
      };
    case movieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAIL:
      return {
        fetchingMovie: false
      };
    case movieDetailsActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}
