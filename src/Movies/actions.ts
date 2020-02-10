import { action } from 'typesafe-actions';
import { ThunkResult } from 'StoreTypes';

import { getGenres, getMovies } from '../api/movies';
import { Filter, Genre, Movie } from './types';

export enum moviesActionTypes {
  FETCH_MOVIES_REQUEST = 'movies/FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS = 'movies/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAIL = 'movies/FETCH_MOVIES_Fail',
  FETCH_GENRES_REQUEST = 'movies/FETCH_GENRES_REQUEST',
  FETCH_GENRES_SUCCESS = 'movies/FETCH_GENRES_SUCCESS',
  FETCH_GENRES_FAIL = 'movies/FETCH_GENRES_FAIL',
  SET_CURRENT_PAGE = 'movies/SET_CURRENT_PAGE',
  SET_CURRENT_FILTER = 'movies/SET_CURRENT_FILTER'
}

export interface FetchMoviesPayload {
  page: number;
  filter?: Filter;
}

export interface FetchMoviesSuccessPayload {
  page: number;
  results: Movie[];
  totalResults: number;
  totalPages: number;
}

export type FetchGenresSuccessPayload = { genres: Genre[] };

export const moviesActions = {
  fetchMoviesRequest: () => action(moviesActionTypes.FETCH_MOVIES_REQUEST),
  fetchMoviesSuccess: (payload: FetchMoviesSuccessPayload) =>
    action(moviesActionTypes.FETCH_MOVIES_SUCCESS, payload),
  fetchMoviesFail: (error: string) => action(moviesActionTypes.FETCH_MOVIES_FAIL, error),
  fetchGenresRequest: () => action(moviesActionTypes.FETCH_GENRES_REQUEST),
  fetchGenresSuccess: (payload: FetchGenresSuccessPayload) =>
    action(moviesActionTypes.FETCH_GENRES_SUCCESS, payload),
  fetchGenresFail: (error: string) => action(moviesActionTypes.FETCH_GENRES_FAIL, error),
  setCurrentPage: (page: number) => action(moviesActionTypes.SET_CURRENT_PAGE, page),
  setCurrentFilter: (filter: Filter) => action(moviesActionTypes.SET_CURRENT_FILTER, filter)
};

export const fetchMovies = (): ThunkResult<void> => async (dispatch, getState) => {
  try {
    const state = getState();
    if (state.movies.fetchingMovies) {
      return;
    }
    dispatch(moviesActions.fetchMoviesRequest());
    const page = state.movies.currentPage;
    const filter = state.movies.currentFilter;
    const { data } = await getMovies({ filter, page });
    dispatch(moviesActions.fetchMoviesSuccess(data));
  } catch (e) {
    dispatch(moviesActions.fetchMoviesFail("Couldn't get movies"));
    console.log(e);
  }
};

export const fetchGenres = (): ThunkResult<void> => async (dispatch, getState) => {
  try {
    const state = getState();
    const a = state.movies.genres;
    if (state.movies.fetchingGenres || Object.keys(a).length !== 0) {
      return;
    }
    dispatch(moviesActions.fetchGenresRequest());
    const { data } = await getGenres();
    dispatch(moviesActions.fetchGenresSuccess(data));
  } catch (e) {
    dispatch(moviesActions.fetchGenresFail("Couldn't get genres"));
    console.log(e);
  }
};

export const onPageChange = ({ selected }: { selected: number }): ThunkResult<void> => async (
  dispatch,
  getState
) => {
  dispatch(moviesActions.setCurrentPage(selected + 1));
  await fetchMovies()(dispatch, getState, undefined);
};

export const onFilterChange = (filter: Filter): ThunkResult<void> => async (dispatch, getState) => {
  dispatch(moviesActions.setCurrentFilter(filter));
  dispatch(moviesActions.setCurrentPage(1));
  await fetchMovies()(dispatch, getState, undefined);
};
