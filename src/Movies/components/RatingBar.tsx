import React from 'react';
import styled from 'styled-components';
import { getColor, getFontSize } from '../../UiElements/themeHelpers';
import Box from '../../UiElements/Layout/Box';

const Svg = styled.svg`
  display: block;
  position: relative;
`;

const CircleBackground = styled.path`
  fill: none;
  stroke: #fff;
  stroke-width: 2.8;
`;

const Circle = styled.path<{ rating: number }>`
  stroke: ${getColor('primary.main')};
  fill: none;
  stroke-width: 3.8;
  stroke-linecap: round;
  stroke-dasharray: ${(props) => props.rating} 100;
`;

const RatingText = styled.p`
  font-size: ${getFontSize(1)};
  color: ${getColor('common.white')};
  line-height: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin: 0;
`;

const RatingBar: React.FunctionComponent<{ rating: number }> = ({ rating }) => {
  if (rating <= 0 || rating > 10) {
    return null;
  }

  const percentage = Math.floor(rating * 10);

  return (
    <Box position='relative' width='auto'>
      <Svg viewBox='0 0 36 36'>
        <CircleBackground
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <Circle
          rating={percentage}
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
      </Svg>
      <RatingText>{rating}</RatingText>
    </Box>
  );
};

export default RatingBar;
