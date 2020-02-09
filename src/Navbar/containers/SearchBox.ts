import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { RootAction, RootState } from 'StoreTypes';

import SearchBox from '../components/SearchBox';
import { SearchBoxDispatchProps, SearchBoxStateProps } from '../types';
import { fetchGenres } from '../../Movies/actions';
import { getGenres } from '../../MovieDetails/selectors';

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): SearchBoxDispatchProps => ({
  onSuggestionSelected: (_, data) => {
    dispatch(push(`/movie/${data.suggestion.id}`, {}));
  },
  ...bindActionCreators({ fetchGenres }, dispatch)
});

const mapStateToProps = (state: RootState): SearchBoxStateProps => ({
  genres: getGenres(state)
});

export default connect<SearchBoxStateProps, SearchBoxDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
