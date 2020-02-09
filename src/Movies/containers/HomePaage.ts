import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchMovies } from '../actions';
import Home from '../components/Home';
import { HomeDispatchProps } from '../types';

const mapDispatchToProps = (dispatch: Dispatch): HomeDispatchProps =>
  bindActionCreators({ fetchMovies }, dispatch);

export default connect<{}, HomeDispatchProps>(null, mapDispatchToProps)(Home);
