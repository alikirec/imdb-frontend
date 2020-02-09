import { LoginPayload, AuthSuccessPayload, SignupPayload } from '../Authentication/actions';
import { User } from '../Authentication/types';
import { WatchListItem } from '../Movies/types';
import { axiosUser as axios } from '../utils/axios';

export const apiLogin = (payload: LoginPayload) =>
  axios.post<AuthSuccessPayload>('/auth/login', payload);

export const apiSignup = (payload: SignupPayload) =>
  axios.post<AuthSuccessPayload>('/auth/signup', payload);

export const apiLogout = () => axios.get('/auth/logout');

export const getUser = () => axios.get<User>('/user/me');

export const apiRemoveMovie = (id: number) =>
  axios.delete('/user/me/watch-list', { data: { movies: [id] } });

export const apiAddMovie = (item: WatchListItem) =>
  axios.post<{ watchList: WatchListItem[] }>('/user/me/watch-list', { movies: [item] });
