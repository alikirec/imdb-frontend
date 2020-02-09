import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'StoreTypes';

import { login } from '../actions';
import LoginForm from '../components/LoginForm';
import { LoginDispatchProps, LoginOwnProps } from '../types';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootAction>
): LoginDispatchProps => bindActionCreators({ onSubmit: login }, dispatch);

export default connect<{}, LoginDispatchProps, LoginOwnProps>(null, mapDispatchToProps)(LoginForm);
