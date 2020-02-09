import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'StoreTypes';

import { signup } from '../actions';
import SignupForm from '../components/SignupForm';
import { SignupDispatchProps, SignupOwnProps } from '../types';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootAction>
): SignupDispatchProps => bindActionCreators({ onSubmit: signup }, dispatch);

export default connect<{}, SignupDispatchProps, SignupOwnProps>(
  null,
  mapDispatchToProps
)(SignupForm);
