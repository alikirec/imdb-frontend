import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'StoreTypes';

import MovieFilter from '../components/MovieFilter';
import { Filter, MovieFilterDispatchProps, MovieFilterStateProps } from '../types';
import { onFilterChange } from '../actions';
import { fetchMovieDetails } from '../../MovieDetails/actions';

const mapStateToProps = (state: RootState): MovieFilterStateProps => ({
  filter: state.movies.currentFilter
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootAction>
): MovieFilterDispatchProps => ({
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    dispatch(fetchMovieDetails(530915));
    const filter = e.currentTarget.name as Filter;
    dispatch(onFilterChange(filter));
  }
});

export default connect<MovieFilterStateProps, MovieFilterDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(MovieFilter);
