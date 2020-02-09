import React from 'react';
import styled from 'styled-components';

import Box from '../../UiElements/Layout/Box';
import { getColor, getShadow } from '../../UiElements/themeHelpers';
import { Actor } from '../types';
import { MOVIE_DB_IMAGE_URL } from '../../api/movies';
import { Text } from '../../UiElements/Typography/Text';

const Container = styled(Box)`
  background-color: ${getColor('common.black')};
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${getShadow(5, true)};
  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ActorImage = styled.img`
  width: 100%;
  vertical-align: middle;
`;

const ActorCard: React.FunctionComponent<{ actor: Actor }> = ({ actor }) => (
  <Container>
    <ActorImage src={`${MOVIE_DB_IMAGE_URL.small}${actor.profilePath}`} alt={actor.name} />
    <Box px={2} py={3}>
      <Text color='common.white'>{actor.name}</Text>
      <Text color='common.white' small>
        {actor.character}
      </Text>
    </Box>
  </Container>
);

export default ActorCard;
