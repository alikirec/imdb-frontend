import { path } from 'ramda';

export const getUserId = path<string>(['authentication', 'user', 'id']);
