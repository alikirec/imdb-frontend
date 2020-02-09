import { RootAction } from '../store/rootAction';
import { authenticationActionTypes } from './actions';
import { AuthenticationState, User } from './types';

export const initialState: AuthenticationState = { loggingIn: false, signingUp: false };

export default function(state = initialState, action: RootAction): AuthenticationState {
  switch (action.type) {
    case authenticationActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      };
    case authenticationActionTypes.LOGIN_SUCCESS:
    case authenticationActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        ...action.payload
      };
    case authenticationActionTypes.LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false
      };
    case authenticationActionTypes.SET_WATCH_LIST:
      return {
        ...state,
        user: {
          ...(state.user as User),
          watchList: action.payload
        }
      };
    case authenticationActionTypes.CLEAR:
      return initialState;
    default:
      return state;
  }
}
