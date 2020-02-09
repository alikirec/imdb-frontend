import { prop } from 'ramda';
import { action } from 'typesafe-actions';
import { ThunkResult } from 'StoreTypes';
import { axiosUser } from '../utils/axios';

import { getCredits, getImages, getMovie } from '../api/movies';
import { apiAddMovie } from '../api/user';
import { authenticationActions } from '../Authentication/actions';
import { getMovieId, getMovieInfo } from './selectors';
import { MovieDetailsState } from './types';

export enum movieDetailsActionTypes {
  FETCH_MOVIE_DETAILS_REQUEST = 'movieDetails/FETCH_MOVIE_DETAILS_REQUEST',
  FETCH_MOVIE_DETAILS_SUCCESS = 'movieDetails/FETCH_MOVIE_DETAILS_SUCCESS',
  FETCH_MOVIE_DETAILS_FAIL = 'movieDetails/FETCH_MOVIE_DETAILS_REQUEST',
  RESET = 'movieDetails/RESET'
}

interface FetchDetailsPayload {
  id: number;
}

type FetchSuccessPayload = Required<Omit<MovieDetailsState, 'fetchingMovie'>>;

export const movieDetailsActions = {
  fetchMovieDetailsRequest: (payload: FetchDetailsPayload) =>
    action(movieDetailsActionTypes.FETCH_MOVIE_DETAILS_REQUEST, payload),
  fetchMovieDetailsSuccess: (payload: FetchSuccessPayload) =>
    action(movieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCESS, payload),
  loginFail: (error: string) => action(movieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAIL, error),
  reset: () => action(movieDetailsActionTypes.RESET)
};

export const fetchMovieDetails = (id: number): ThunkResult<void> => async (dispatch, getState) => {
  try {
    const state = getState();
    const movieId = getMovieId(state);
    if (movieId === id) {
      return;
    }

    dispatch(movieDetailsActions.fetchMovieDetailsRequest({ id }));
    const { data: info } = await getMovie(id);
    const { data: credits } = await getCredits(id);
    const { data: images } = await getImages(id);
    axiosUser.get('/user/me/');
    dispatch(
      movieDetailsActions.fetchMovieDetailsSuccess({
        movieInfo: info,
        actors: credits.cast,
        images: images.backdrops.map(prop('filePath'))
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export const addToWatchList = (): ThunkResult<void> => async (dispatch, getState) => {
  try {
    const state = getState();
    const movieDetails = getMovieInfo(state);
    if (!movieDetails) {
      return;
    }

    const { data } = await apiAddMovie({
      id: movieDetails.id,
      posterPath: movieDetails.posterPath || '',
      title: movieDetails.title || ''
    });

    dispatch(authenticationActions.setWatchList(data.watchList));
  } catch (e) {
    console.log(e);
  }
};
