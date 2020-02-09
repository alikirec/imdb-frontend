import React, { useEffect } from 'react';

import Page from '../../UiElements/Layout/Page';
import MoviesPage from '../containers/MoviesPage';
import { HomeProps } from '../types';
import MovieFilter from '../containers/MovieFilter';

const Home: React.FunctionComponent<HomeProps> = (props) => {
  useEffect(() => {
    props.fetchMovies();
  }, []);

  return (
    <Page backgroundImage='http://www.vamm.com.mx/images/fondo3.png'>
      <MovieFilter />
      <MoviesPage />
    </Page>
  );
};

export default Home;
