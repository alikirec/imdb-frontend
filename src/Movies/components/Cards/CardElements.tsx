import React from 'react';
import ContentLoader from 'react-content-loader';
import styled, { keyframes } from 'styled-components';

import Box from '../../../UiElements/Layout/Box';
import LazyLoadImage from '../../../UiElements/LazyLoadImage';
import { getColor, getShadow, getSpace } from '../../../UiElements/themeHelpers';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CardContainer = styled(Box)`
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${getShadow(5, true)};
  background: ${getColor('common.black')};
  height: 100%;
  a {
    text-decoration: none;
  }

  p {
    cursor: pointer;
  }

  img {
    width: 100%;
    vertical-align: middle;
    animation: ${fadeIn} 2s linear;
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  img {
    width: 100%;
    vertical-align: middle;
    animation: ${fadeIn} 2s linear;
  }
`;

export const MovieImage: React.FunctionComponent<React.ImgHTMLAttributes<HTMLImageElement>> = (
  props
) => (
  <ImageContainer>
    <LazyLoadImage
      placeholder={
        <ContentLoader viewBox='0 0 100 150' foregroundColor='#ddd'>
          <rect x='0' y='0' width='100' height='150' />
        </ContentLoader>
      }
      imgSrc={props.src}
    />
  </ImageContainer>
);

export const RatingWrapper = styled.div`
  position: absolute;
  top: ${getSpace(2)};
  right: ${getSpace(2)};
  width: ${getSpace(5)};
  height: ${getSpace(5)};
`;
