import React from 'react';
import styled from 'styled-components';
import { FormattedDate, FormattedNumber } from 'react-intl';
import FormattedDuration from 'react-intl-formatted-duration';

import { MOVIE_DB_IMAGE_URL } from '../../api/movies';
import Box from '../../UiElements/Layout/Box';
import { H1, H3 } from '../../UiElements/Typography/Heading';
import { Text } from '../../UiElements/Typography/Text';
import { getBreakpoint, getColor } from '../../UiElements/themeHelpers';
import { MovieInfo } from '../types';
import RatingBar from '../../Movies/components/RatingBar';
import Button from '../../UiElements/Button/Buttons';

const OverviewGrid = styled.div`
  width: 100%;
  display: grid;
  background-color: rgba(0, 0, 0, 0.5);
  grid-template: 'info' 'backdrop' 'stats';

  @media (min-width: ${getBreakpoint('sm')}) {
    grid-template: 'backdrop info' 'stats stats';
    grid-template-columns: 0.3fr 0.7fr;
    grid-template-rows: 1fr auto;
  }

  @media (min-width: ${getBreakpoint('lg')}) {
    grid-template: 'backdrop info' 'backdrop stats';
    grid-template-columns: 0.3fr 0.7fr;
    grid-template-rows: 1fr auto;
  }
`;

const BackdropImage = styled.img`
  width: 100%;
  grid-area: backdrop;
  vertical-align: middle;
`;

const Icon = styled.i`
  color: ${getColor('grey.300')};
  font-size: 24px;
`;

const StatWrapper: React.FunctionComponent = ({ children }) => (
  <Box display='flex' width='auto' mb={{ _: 3, sm: 0 }}>
    {children}
  </Box>
);

const StatText: React.FunctionComponent = ({ children }) => (
  <Text color='grey.300' ml={3} mb={0}>
    {children}
  </Text>
);

interface Props {
  movieInfo: MovieInfo;
  isInWatchList: boolean;
  addToWatchList(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  removeFromWatchList(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const MovieOverview: React.FunctionComponent<Props> = ({
  movieInfo,
  isInWatchList,
  addToWatchList,
  removeFromWatchList
}) => (
  <OverviewGrid data-cy='movieOverview'>
    <BackdropImage src={`${MOVIE_DB_IMAGE_URL.medium}${movieInfo.posterPath}`} />
    <Box bg='rgba(0, 0, 0, 0.5)' gridArea='info' px={4} py={3} position='relative'>
      <H1 color='brandYellow'>{movieInfo.title}</H1>
      <H3 color='common.white'>{movieInfo.tagline}</H3>
      {isInWatchList ? (
        <Button
          onClick={removeFromWatchList}
          name={movieInfo.id.toString()}
          variant='secondary'
          mb={3}
        >
          Remove from watchlist
        </Button>
      ) : (
        <Button
          onClick={addToWatchList}
          name={movieInfo.id.toString()}
          variant='primary'
          mb={3}
          data-cy='addToWatchList'
        >
          Add to watch list
        </Button>
      )}
      <Text color='common.white'>{movieInfo.overview}</Text>
      <Box display='flex' flexWrap='wrap'>
        {movieInfo.genres.map((genre) => (
          <Box key={genre.id} bg='brandYellow' width='auto' p={2} mr={3} mb={3} borderRadius='4px'>
            <Text mb={0} color='common.white' fontWeight={5}>
              {genre.name}
            </Text>
          </Box>
        ))}
      </Box>
      {movieInfo.voteAverage && (
        <Box position='absolute' top='32px' right='32px' width='48px'>
          <RatingBar rating={movieInfo.voteAverage} />
        </Box>
      )}
    </Box>
    <Box
      bg='common.black'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      flexDirection={{ _: 'column', sm: 'row' }}
      gridArea='stats'
      px={3}
      py={4}
    >
      <StatWrapper>
        <Icon className='material-icons'>date_range</Icon>
        <StatText>
          Release date:&nbsp;&nbsp;
          <FormattedDate
            value={new Date(movieInfo.releaseDate)}
            year='numeric'
            month='long'
            day='2-digit'
          />
        </StatText>
      </StatWrapper>
      <StatWrapper>
        <Icon className='material-icons'>timer</Icon>
        <StatText>
          <FormattedDuration seconds={movieInfo.runtime * 60} format='{hours} {minutes}' />
        </StatText>
      </StatWrapper>
      <StatWrapper>
        <Icon className='material-icons'>attach_money</Icon>
        <StatText>
          Budget:&nbsp;&nbsp;
          <FormattedNumber
            value={movieInfo.budget}
            style='currency'
            currency='USD'
            maximumFractionDigits={2}
          />
        </StatText>
      </StatWrapper>
    </Box>
  </OverviewGrid>
);

export default MovieOverview;
