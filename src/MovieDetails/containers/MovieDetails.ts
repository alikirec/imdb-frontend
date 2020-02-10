import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'StoreTypes';

import { addToWatchList, removeFromWatchList } from '../../WatchList/actions';
import { fetchMovieDetails } from '../actions';
import MovieDetails from '../components/MovieDetails';
import { getIsInWatchList, getMovieDetails } from '../selectors';
import { MovieDetailsDispatchProps, MovieDetailsStateProps } from '../types';

const mapStateToProps = (state: RootState): MovieDetailsStateProps => {
  return {
    movieDetails: getMovieDetails(state),
    isInWatchList: getIsInWatchList(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MovieDetailsDispatchProps =>
  bindActionCreators({ addToWatchList, fetchMovieDetails, removeFromWatchList }, dispatch);

export default connect<MovieDetailsStateProps, MovieDetailsDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
