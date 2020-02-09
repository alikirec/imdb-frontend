import React from 'react';
import styled, { keyframes, StyledProps } from 'styled-components';

import { getColor } from './themeHelpers';

interface SpinnerProps {
  size?: number | string;
  color?: string;
  thickness?: string;
}

const RingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const getSpinnerColor = (props: StyledProps<SpinnerProps>) => {
  return (props.color && getColor(props.color)(props)) || getColor('common.white')(props);
};

const SpinnerContainer = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size || '64px'};
  height: ${(props) => props.size || '64px'};
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.size || '64px'};
    height: ${(props) => props.size || '64px'};
    border: ${(props) => props.thickness || '8px'} solid;
    border-radius: 50%;
    animation: ${RingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${getSpinnerColor} transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Spinner: React.FunctionComponent<SpinnerProps> = ({ size, color, thickness }) => (
  <SpinnerContainer size={size} color={color} thickness={thickness}>
    <div />
    <div />
    <div />
  </SpinnerContainer>
);

export default Spinner;
