import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'StoreTypes';

import { removeFromWatchList } from '../../Authentication/actions';
import { getWatchList } from '../selectors';
import { WatchListStateProps, WatchListDispatchProps } from '../types';
import WatchList from '../components/WatchList';

const mapStateToProps = (state: RootState): WatchListStateProps => ({
  watchList: getWatchList(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootAction>
): WatchListDispatchProps => bindActionCreators({ removeFromWatchList }, dispatch);

export default connect<WatchListStateProps, WatchListDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
