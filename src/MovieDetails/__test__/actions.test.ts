import { initialState } from '../../store/rootReducer';
import { axiosMovies } from '../../utils/axios';
import { fetchMovieDetails, movieDetailsActions } from '../actions';
import { exampleActor, exampleMovieInfo } from './fixtures';

jest.mock('axios');
const mockAxios = axiosMovies as jest.Mocked<typeof axiosMovies>;

const mockMovieInfo = (): void => {
  mockAxios.get.mockResolvedValueOnce({
    data: exampleMovieInfo,
    status: 200,
    statusText: 'OK',
    headers: '',
    config: {}
  });
};

const mockMovieCredits = (): void => {
  mockAxios.get.mockResolvedValueOnce({
    data: { id: 1, cast: [exampleActor] },
    status: 200,
    statusText: 'OK',
    headers: '',
    config: {}
  });
};

const mockMovieImages = (): void => {
  mockAxios.get.mockResolvedValueOnce({
    data: { id: 1, backdrops: [{ filePath: '/image' }] },
    status: 200,
    statusText: 'OK',
    headers: '',
    config: {}
  });
};

describe('Fetch movie details async action', () => {
  it('should fetch movie info, cast and images', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => initialState);

    mockMovieInfo();
    mockMovieCredits();
    mockMovieImages();

    await fetchMovieDetails(123)(dispatch, getState, undefined);
    expect(dispatch).toBeCalledWith(movieDetailsActions.fetchMovieDetailsRequest());
    expect(mockAxios.get).toBeCalledWith('/movie/123');
    expect(mockAxios.get).toBeCalledWith('/movie/123/credits');
    expect(mockAxios.get).toBeCalledWith('/movie/123/images', { params: { language: 'null' } });
    expect(dispatch).toBeCalledWith(
      movieDetailsActions.fetchMovieDetailsSuccess({
        movieInfo: exampleMovieInfo,
        images: ['/image'],
        actors: [exampleActor]
      })
    );
  });

  it('should  not fetch movie details if the movie already is in the state', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn().mockReturnValue({
      ...initialState,
      movieDetails: {
        ...initialState.movieDetails,
        movieInfo: exampleMovieInfo
      }
    });

    await fetchMovieDetails(123)(dispatch, getState, undefined);
    expect(dispatch).toBeCalledTimes(0);
  });
});
