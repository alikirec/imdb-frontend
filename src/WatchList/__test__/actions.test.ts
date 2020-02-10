import * as Sentry from '@sentry/browser';
import { axiosUser } from '../../utils/axios';
import { store } from 'react-notifications-component';

import { authenticationActions } from '../../Authentication/actions';
import { addToWatchList, removeFromWatchList } from '../actions';
import { initialState } from '../../store/rootReducer';
import { exampleActor, exampleMovieInfo } from '../../MovieDetails/__test__/fixtures';
import createErrorNotification from '../../utils/createErrorNotification';
import React from 'react';

const mockAxios = axiosUser as jest.Mocked<typeof axiosUser>;

const mockAddToWatchList = (success = true) => {
  if (success) {
    mockAxios.post.mockResolvedValueOnce({
      config: {},
      headers: '',
      status: 200,
      statusText: 'OK',
      data: {
        watchList: [{ id: 123, posterPath: '/poster', title: 'Pulp fiction' }]
      }
    });
    return;
  }

  mockAxios.get.mockImplementationOnce(() => Promise.reject('error'));
};

const mockRemoveFromWatchList = (success = true) => {
  if (success) {
    mockAxios.delete.mockResolvedValueOnce({
      config: {},
      headers: '',
      status: 200,
      statusText: 'OK',
      data: {
        watchList: []
      }
    });
    return;
  }

  mockAxios.get.mockImplementationOnce(() => Promise.reject('error'));
};

describe('Add to watch list async action', () => {
  const dispatch = jest.fn();

  it('should add a movie to watch list', async () => {
    const getState = jest.fn().mockReturnValue({
      ...initialState,
      authentication: {
        user: {
          id: '123'
        }
      },
      movieDetails: {
        movieInfo: exampleMovieInfo,
        actors: [exampleActor],
        images: ['asd'],
        fetchingMovie: false
      }
    });

    mockAddToWatchList();

    await addToWatchList()(dispatch, getState, undefined);

    expect(mockAxios.post).toBeCalledWith('/user/me/watch-list', {
      movies: [{ id: 123, posterPath: '/poster', title: 'Pulp fiction' }]
    });

    expect(dispatch).toBeCalledWith(
      authenticationActions.setWatchList([
        { id: 123, posterPath: '/poster', title: 'Pulp fiction' }
      ])
    );
  });

  it('should notify the user and report to sentry when request fails', async () => {
    const getState = jest.fn().mockReturnValue({
      ...initialState,
      authentication: {
        user: {
          id: '123'
        }
      },
      movieDetails: {
        movieInfo: exampleMovieInfo,
        actors: [exampleActor],
        images: ['asd'],
        fetchingMovie: false
      }
    });

    mockAddToWatchList(false);
    const withScopeMock = jest.spyOn(Sentry, 'withScope').mockImplementationOnce(jest.fn());
    const notificationMock = jest.spyOn(store, 'addNotification').mockImplementationOnce(jest.fn());

    await addToWatchList()(dispatch, getState, undefined);
    expect(withScopeMock).toBeCalled();
    expect(notificationMock).toBeCalledWith(
      createErrorNotification('Fail', "Couldn't add to watchlist")
    );
  });
});

describe('Remove from watch list async action', () => {
  const dispatch = jest.fn();
  const preventMock = jest.fn();
  const eventMock = ({
    preventDefault: preventMock,
    currentTarget: { name: '123' }
  } as unknown) as React.MouseEvent<HTMLButtonElement, MouseEvent>;

  afterEach(() => {
    mockAxios.delete.mockClear();
  });

  it('should remove a movie from watchlist', async () => {
    const getState = jest.fn().mockReturnValue({
      ...initialState,
      authentication: {
        ...initialState.authentication,
        user: {
          id: '123sdf',
          username: 'test909',
          watchList: [{ id: 123, posterPath: '/poster', title: 'Pulp fiction' }]
        }
      }
    });

    mockRemoveFromWatchList();
    await removeFromWatchList(eventMock)(dispatch, getState, undefined);
    expect(preventMock).toBeCalled();
    expect(mockAxios.delete).toBeCalledWith('/user/me/watch-list', { data: { movies: [123] } });
    expect(dispatch).toBeCalledWith(authenticationActions.setWatchList([]));
  });

  it('should not call axios if watch list is empty', async () => {
    const getState = jest.fn().mockReturnValue({
      ...initialState,
      authentication: {
        ...initialState.authentication,
        user: {
          id: '123sdf',
          username: 'test909',
          watchList: []
        }
      }
    });

    await removeFromWatchList(eventMock)(dispatch, getState, undefined);
    expect(mockAxios.delete).toBeCalledTimes(0);
  });
});
