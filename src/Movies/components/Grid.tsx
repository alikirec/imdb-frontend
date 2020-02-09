import styled, { StyledProps } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { getBreakpoint, getSpace } from '../../UiElements/themeHelpers';

export const Grid = styled.div<StyledProps<SpaceProps & React.HTMLAttributes<HTMLDivElement>>>`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-gap: ${getSpace(5)} ${getSpace(7)};
  grid-template-columns: repeat(1, 280px);
  background-color: transparent;
  @media (min-width: ${getBreakpoint('sm')}) {
    grid-template-columns: repeat(2, 250px);
  }
  @media (min-width: ${getBreakpoint('md')}) {
    grid-template-columns: repeat(3, 250px);
  }
  @media (min-width: ${getBreakpoint('lg')}) {
    grid-template-columns: repeat(4, 240px);
  }
  ${space};
`;

export const GridItem = styled.div`
  background-color: transparent;
  border-radius: 4px;
`;
