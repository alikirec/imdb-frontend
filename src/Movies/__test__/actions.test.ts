import { initialState } from '../../store/rootReducer';
import { axiosMovies } from '../../utils/axios';
import * as actions from '../actions';
import { genresList, moviesList } from './fixtures';

jest.mock('axios');
const mockAxios = axiosMovies as jest.Mocked<typeof axiosMovies>;

const { fetchMovies, moviesActions, fetchGenres, onPageChange, onFilterChange } = actions;

const mockGetMovies = (success = true) => {
  if (success) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    mockAxios.get.mockResolvedValueOnce({ data: moviesList });
    return;
  }
  // eslint-disable-next-line no-undef
  mockAxios.get.mockImplementationOnce(() => Promise.reject());
};

const mockFetchGenres = (success = true) => {
  if (success) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    mockAxios.get.mockResolvedValueOnce({ data: genresList });
    return;
  }
  // eslint-disable-next-line no-undef
  mockAxios.get.mockImplementationOnce(() => Promise.reject());
};

describe('Fetch movies async action', () => {
  it('should fetch movies', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => initialState);

    mockGetMovies();

    await fetchMovies()(dispatch, getState, undefined);
    expect(dispatch).toBeCalledWith(moviesActions.fetchMoviesRequest());
    expect(mockAxios.get).toBeCalledWith('/movie/popular', { params: { page: 1 } });
    expect(dispatch).toBeCalledWith(moviesActions.fetchMoviesSuccess(moviesList));
  });

  it('should not fetch movies if movies are already being fetched', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      ...initialState,
      movies: {
        ...initialState.movies,
        fetchingMovies: true
      }
    }));

    await fetchMovies()(dispatch, getState, undefined);
    expect(dispatch).toBeCalledTimes(0);
  });

  it('should handle error', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => initialState);

    // eslint-disable-next-line no-undef
    mockAxios.get.mockImplementationOnce(() => Promise.reject());

    await fetchMovies()(dispatch, getState, undefined);
    expect(dispatch).toBeCalledWith(moviesActions.fetchMoviesRequest());
    expect(mockAxios.get).toBeCalledWith('/movie/popular', { params: { page: 1 } });
    expect(dispatch).toBeCalledWith(moviesActions.fetchMoviesFail("Couldn't get movies"));
  });
});

describe('Fetch genres async action', () => {
  it('should fetch genres', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => initialState);

    mockFetchGenres();

    await fetchGenres()(dispatch, getState, undefined);
    expect(dispatch).toBeCalledWith(moviesActions.fetchGenresRequest());
    expect(mockAxios.get).toBeCalledWith('/genre/movie/list');
    expect(dispatch).toBeCalledWith(moviesActions.fetchGenresSuccess(genresList));
  });

  it('should not fetch genres if they are already being fetched', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      ...initialState,
      movies: {
        ...initialState.movies,
        fetchingGenres: true
      }
    }));

    await fetchGenres()(dispatch, getState, undefined);
    expect(dispatch).toBeCalledTimes(0);
  });

  it('should handle error', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => initialState);

    mockFetchGenres(false);

    await fetchGenres()(dispatch, getState, undefined);
    expect(dispatch).toBeCalledWith(moviesActions.fetchGenresRequest());
    expect(mockAxios.get).toBeCalledWith('/genre/movie/list');
    expect(dispatch).toBeCalledWith(moviesActions.fetchGenresFail("Couldn't get genres"));
  });
});

describe('Change page async actions', () => {
  it('should set page and fetch movies', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => initialState);
    mockGetMovies();

    await onPageChange({ selected: 2 })(dispatch, getState, undefined);
    expect(dispatch).toBeCalledWith(moviesActions.setCurrentPage(3));
  });
});

describe('Filter change async action', () => {
  it('should set current filter and fetch movies', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => initialState);
    mockGetMovies();

    await onFilterChange('topRated')(dispatch, getState, undefined);
    expect(dispatch).toBeCalledWith(moviesActions.setCurrentFilter('topRated'));
  });
});
