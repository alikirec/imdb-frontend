import { axiosMovies as axios } from '../utils/axios';

import { Actor, MovieInfo } from '../MovieDetails/types';
import {
  FetchGenresSuccessPayload,
  FetchMoviesPayload,
  FetchMoviesSuccessPayload
} from '../Movies/actions';
import camelToSnake from '../utils/camelToSnake';

export const MOVIE_DB_IMAGE_URL = {
  small: 'https://image.tmdb.org/t/p/w185',
  medium: 'https://image.tmdb.org/t/p/w300',
  large: 'https://image.tmdb.org/t/p/w1280',
  original: 'https://image.tmdb.org/t/p/original'
};

export const getMovies = ({ filter = 'popular', page }: FetchMoviesPayload) => {
  const filterSnakeCase = camelToSnake(filter);
  return axios.get<FetchMoviesSuccessPayload>(`/movie/${filterSnakeCase}`, {
    params: {
      page
    }
  });
};

export const getGenres = () =>
  axios.get<FetchGenresSuccessPayload>('/genre/movie/list');

export const getMovie = (id: number) => axios.get<MovieInfo>(`/movie/${id}`);

export const getCredits = (id: number) => axios.get<{ id: number; cast: Actor[] }>(`/movie/${id}/credits`);

export const getImages = (id: number) =>
  axios.get<{ id: number; backdrops: { filePath: string }[] }>(`/movie/${id}/images`, {
    params: { language: 'null' }
  });

export const searchMovies = (query: string) => {
  return axios.get<FetchMoviesSuccessPayload>(`/search/movie`, {
    params: { query: query }
  });
};
