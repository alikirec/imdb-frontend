import { path } from 'ramda';
//import { StateSelector } from '../types/selectors';

export const getUserId = path<string>(['authentication', 'user', 'id']);
export const getWatchListIds = path<number[]>(['authentication', 'user', 'watchList']);
