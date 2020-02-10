import React from 'react';
import { AxiosResponse } from 'axios';
import * as Sentry from '@sentry/browser';
import { ThunkResult } from 'StoreTypes';
import { store } from 'react-notifications-component';
import { push } from 'connected-react-router';

import { apiAddMovie, apiRemoveMovie } from '../api/user';
import { authenticationActions } from '../Authentication/actions';
import { getUserId } from '../Authentication/selectors';
import { getMovieInfo } from '../MovieDetails/selectors';
import { getWatchList } from '../Movies/selectors';
import { WatchListItem } from '../Movies/types';
import createErrorNotification from '../utils/createErrorNotification';

export const addToWatchList = (): ThunkResult<void> => async (dispatch, getState) => {
  try {
    const state = getState();
    const movieDetails = getMovieInfo(state);
    const isAuthenticated = !!getUserId(state);

    if (!isAuthenticated) {
      dispatch(push('/authenticate'));
      return;
    }

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
    store.addNotification(createErrorNotification('Fail', "Couldn't add to watchlist"));
    Sentry.withScope((scope) => {
      scope.setExtras({ state: getState() });
      Sentry.captureException(e);
    });
  }
};

export const removeFromWatchList = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
): ThunkResult<void> => async (dispatch, getState) => {
  try {
    e.preventDefault();
    const idToRemove = parseInt(e.currentTarget.name);
    const state = getState();
    const watchList = getWatchList(state);

    if (!idToRemove || watchList.length === 0) {
      return;
    }

    const { data } = (await apiRemoveMovie(idToRemove)) as AxiosResponse<{
      watchList: WatchListItem[];
    }>;
    dispatch(authenticationActions.setWatchList(data.watchList));
  } catch (e) {
    store.addNotification(createErrorNotification('Fail', "Couldn't remove from watchlist"));
    Sentry.withScope((scope) => {
      scope.setExtras({ state: getState() });
      Sentry.captureException(e);
    });
  }
};
