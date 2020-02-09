import reducer, { initialState } from '../reducer';
import { movieDetailsActions } from '../actions';
import { exampleMovieInfo, exampleActor } from './fixtures';

describe('Movie details reducer', () => {
  it('should handle fetch movie details request', () => {
    expect(reducer(initialState, movieDetailsActions.fetchMovieDetailsRequest({ id: 1 }))).toEqual({
      ...initialState,
      fetchingMovie: true
    });
  });

  it('should handle fetch movie details success', () => {
    expect(
      reducer(
        initialState,
        movieDetailsActions.fetchMovieDetailsSuccess({
          movieInfo: exampleMovieInfo,
          actors: [exampleActor],
          images: ['asd']
        })
      )
    ).toEqual({
      movieInfo: exampleMovieInfo,
      actors: [exampleActor],
      images: ['asd'],
      fetchingMovie: false
    });
  });

  it('should handle reset', () => {
    const stateWithMovie = {
      ...initialState,
      movieInfo: exampleMovieInfo,
      actors: [exampleActor],
      images: ['asd']
    };
    expect(reducer(stateWithMovie, movieDetailsActions.reset())).toEqual(initialState);
  });
});
