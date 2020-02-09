import { moviesActions } from '../actions';
import reducer, { initialState } from '../reducer';
import { movie } from './fixtures';

describe('Movies reducer', () => {
  it('should handle fetch movies request', () => {
    expect(reducer(initialState, moviesActions.fetchMoviesRequest())).toEqual({
      ...initialState,
      fetchingMovies: true
    });
  });

  it('should handle fetch movies success', () => {
    expect(
      reducer(
        { ...initialState, fetchingMovies: true },
        moviesActions.fetchMoviesSuccess({
          page: 1,
          totalResults: 100,
          totalPages: 5,
          results: [movie]
        })
      )
    ).toEqual({
      ...initialState,
      fetchingMovies: false,
      movies: [movie],
      totalPages: 5
    });
  });

  it('should handle fetch movies fail', () => {
    expect(
      reducer({ ...initialState, fetchingMovies: true }, moviesActions.fetchMoviesFail('err'))
    ).toEqual({
      ...initialState,
      error: 'err',
      fetchingMovies: false
    });
  });
});
