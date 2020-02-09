import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'StoreTypes';

import { logout } from '../../Authentication/actions';
import { getUserId } from '../../Authentication/selectors';
import { MenuStateProps, MenuOwnProps, MenuDispatchProps } from '../types';
import Menu from '../components/Menu';

const mapStateToProps = (state: RootState): MenuStateProps => ({
  isAuthenticated: !!getUserId(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootAction>
): MenuDispatchProps => bindActionCreators({ logout }, dispatch);

export default connect<MenuStateProps, MenuDispatchProps, MenuOwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
