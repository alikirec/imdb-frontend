import React from 'react';
import { Link } from 'react-router-dom';

import { MOVIE_DB_IMAGE_URL } from '../../../api/movies';
import Box from '../../../UiElements/Layout/Box';
import { Text } from '../../../UiElements/Typography/Text';
import RatingBar from '../RatingBar';
import { Movie } from '../../types';
import { CardContainer, MovieImage, RatingWrapper } from './CardElements';

interface Props {
  movie: Movie;
  genres: { [p: number]: string };
}

const MovieListCard: React.FunctionComponent<Props> = ({ movie, genres }) => (
  <CardContainer>
    <Link to={`/movie/${movie.id}`}>
      <MovieImage
        src={`${MOVIE_DB_IMAGE_URL.medium}${movie.posterPath || movie.backdropPath}`}
        alt={movie.title}
      />
      <Box bg='common.black' px={2} py={3} position='relative'>
        <RatingWrapper>
          <RatingBar rating={movie.voteAverage} />
        </RatingWrapper>
        <Text color='common.white' mr={7}>
          {movie.title}
        </Text>
        <Text small color='common.white'>
          {movie.genreIds.map((id) => genres[id]).join(', ')}
        </Text>
      </Box>
    </Link>
  </CardContainer>
);

export default MovieListCard;
