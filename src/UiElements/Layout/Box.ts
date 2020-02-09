import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import { border, color, flexbox, layout, position, shadow, space, grid } from 'styled-system';
import { BoxProps } from './types';

const Box: StyledComponent<'div', DefaultTheme, BoxProps> = styled.div<BoxProps>(
  {
    width: '100%'
  },
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  grid
);

export default Box;
