import axios from 'axios';
import casing from 'casing';

export const axiosMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    // eslint-disable-next-line @typescript-eslint/camelcase,no-undef
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: 'en-US'
  }
});

export const axiosUser = axios.create({
  // eslint-disable-next-line @typescript-eslint/camelcase,no-undef
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'test') {
  axiosMovies.interceptors.response.use(casing.camelize);
}
