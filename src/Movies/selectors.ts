import { pathOr, prop } from 'ramda';
import { RootState } from 'StoreTypes';

import { MoviesState, WatchListItem } from './types';

export const getMoviesPage: (state: RootState) => MoviesState = prop('movies');
export const getWatchList: (state: RootState) => WatchListItem[] = pathOr(
  [],
  ['authentication', 'user', 'watchList']
);
