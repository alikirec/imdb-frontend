import React from 'react';
import styled from 'styled-components';

import { H2 } from '../../UiElements/Typography/Heading';
import Box from '../../UiElements/Layout/Box';
import { getBreakpoint, getSpace } from '../../UiElements/themeHelpers';
import { Actor } from '../types';
import ActorCard from './ActorCard';

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto;
  grid-gap: ${getSpace(5)} ${getSpace(3)};

  @media (min-width: ${getBreakpoint('sm')}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${getSpace(5)} ${getSpace(3)};
  }

  @media (min-width: ${getBreakpoint('md')}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${getSpace(5)} ${getSpace(4)};
  }

  @media (min-width: ${getBreakpoint('lg')}) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: ${getSpace(5)} ${getSpace(4)};
  }
`;

const Actors: React.FunctionComponent<{ actors: Actor[] }> = ({ actors }) => (
  <Box bg='rgba(0, 0, 0, 0.5)' mt={7} px={{ _: 2, md: 5 }} py={5}>
    <H2 color='grey.100'>Actors</H2>
    <Container>
      {actors.slice(0, 6).map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </Container>
  </Box>
);

export default Actors;
