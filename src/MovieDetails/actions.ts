import { prop } from 'ramda';
import { action } from 'typesafe-actions';
import { ThunkResult } from 'StoreTypes';

import { getCredits, getImages, getMovie } from '../api/movies';
import { axiosUser } from '../utils/axios';
import { getMovieId } from './selectors';
import { MovieDetailsState } from './types';

export enum movieDetailsActionTypes {
  FETCH_MOVIE_DETAILS_REQUEST = 'movieDetails/FETCH_MOVIE_DETAILS_REQUEST',
  FETCH_MOVIE_DETAILS_SUCCESS = 'movieDetails/FETCH_MOVIE_DETAILS_SUCCESS',
  FETCH_MOVIE_DETAILS_FAIL = 'movieDetails/FETCH_MOVIE_DETAILS_REQUEST',
  RESET = 'movieDetails/RESET'
}

type FetchSuccessPayload = Required<Omit<MovieDetailsState, 'fetchingMovie'>>;

export const movieDetailsActions = {
  fetchMovieDetailsRequest: () => action(movieDetailsActionTypes.FETCH_MOVIE_DETAILS_REQUEST),
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

    dispatch(movieDetailsActions.fetchMovieDetailsRequest());
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
