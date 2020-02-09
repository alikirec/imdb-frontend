import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { RootState } from 'StoreTypes';

import authenticationReducer, { initialState as authInitial } from '../Authentication/reducer';
import movieDetailsReducer, { initialState as detailsInitial } from '../MovieDetails/reducer';
import moviesReducer, { initialState as moviesInitial } from '../Movies/reducer';

const rootReducer = (history: History) =>
  combineReducers({
    authentication: authenticationReducer,
    movieDetails: movieDetailsReducer,
    movies: moviesReducer,
    router: connectRouter(history)
  });

export const initialState: RootState = {
  movies: moviesInitial,
  authentication: authInitial,
  movieDetails: detailsInitial,
  router: {
    location: {
      state: {},
      hash: '',
      pathname: '/',
      key: '',
      search: ''
    },
    action: 'PUSH'
  }
};

export default rootReducer;
