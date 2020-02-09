import { authenticationActions } from '../actions';
import reducer, { initialState } from '../reducer';

describe('authentication reducer', () => {
  it('should handle login request', () => {
    expect(reducer(initialState, authenticationActions.loginRequest())).toEqual({
      ...initialState,
      loggingIn: true
    });
  });

  it('should handle login success', () => {
    expect(
      reducer(
        { ...initialState, loggingIn: true },
        authenticationActions.loginSuccess({
          user: {
            id: '123',
            username: 'asdf',
            watchList: []
          }
        })
      )
    ).toEqual({
      ...initialState,
      user: {
        id: '123',
        username: 'asdf',
        watchList: []
      }
    });
  });

  it('should handle login fail', () => {
    expect(
      reducer(
        { ...initialState, loggingIn: true },
        authenticationActions.loginFail({
          error: 'asdf'
        })
      )
    ).toEqual({
      ...initialState,
      loggingIn: false
    });
  });
});
