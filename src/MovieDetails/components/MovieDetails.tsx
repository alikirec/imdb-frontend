import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

import { MOVIE_DB_IMAGE_URL } from '../../api/movies';
import Box from '../../UiElements/Layout/Box';
import Page from '../../UiElements/Layout/Page';
import { H2 } from '../../UiElements/Typography/Heading';
import { MovieDetailsProps } from '../types';
import Actors from './Actors';
import MovieOverview from './MovieOverview';
import overviewPlaceholder from './placeholders/overviewPlaceholder';

const MovieDetails: React.FunctionComponent<MovieDetailsProps &
  RouteComponentProps<{ id: string }>> = ({
  addToWatchList,
  fetchMovieDetails,
  removeFromWatchList,
  match,
  movieDetails,
  isInWatchList
}) => {
  useEffect(() => {
    fetchMovieDetails(parseInt(match.params.id));
  }, [match.params.id]);

  const { movieInfo, actors, images, fetchingMovie } = movieDetails;
  if (!movieInfo || fetchingMovie) {
    return overviewPlaceholder;
  }

  return (
    <Page backgroundImage={`${MOVIE_DB_IMAGE_URL.large}${movieInfo.backdropPath}`}>
      <MovieOverview
        movieInfo={movieInfo}
        isInWatchList={isInWatchList}
        addToWatchList={addToWatchList}
        removeFromWatchList={removeFromWatchList}
      />
      {actors && <Actors actors={actors} />}
      {images && images.length && (
        <Box bg='rgba(0, 0, 0, 0.5)' mt={7} px={{ _: 0, sm: 2, md: 5 }} py={4} data-cy='movieGallery'>
          <H2 color='grey.100'>Gallery</H2>
          <ImageGallery
            items={images.map((img) => ({
              original: `${MOVIE_DB_IMAGE_URL.original}${img}`,
              thumbnail: `${MOVIE_DB_IMAGE_URL.small}${img}`
            }))}
          />
        </Box>
      )}
    </Page>
  );
};

export default withRouter(MovieDetails);
