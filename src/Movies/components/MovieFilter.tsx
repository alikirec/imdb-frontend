import React from 'react';
import styled from 'styled-components';

import Box from '../../UiElements/Layout/Box';
import Button from '../../UiElements/Button/Buttons';
import { getBreakpoint, getColor, getFontSize, getSpace } from '../../UiElements/themeHelpers';
import { filters, MovieFilterProps } from '../types';

const ButtonGroup = styled(Box)`
  button {
    padding: ${getSpace(2)};
    font-size: ${getFontSize(0)};
    @media (min-width: ${getBreakpoint('sm')}) {
      padding: ${getSpace(2)} ${getSpace(3)};
      font-size: ${getFontSize(2)};
    }
  }

  button.active {
    color: ${getColor('grey.100')};
    background-color: ${getColor('primary.main')};
    &:hover:enabled {
      @media (hover: none) {
        background-color: ${getColor('primary.main')};
      }
    }
  }
  display: flex;
  width: auto;
  margin-bottom: ${getSpace(6)};
  & > &:not(:first-child),
  & > &:not(:first-child) {
    margin-left: -1px;
  }

  & > &:not(:last-child) > button,
  & > button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > &:not(:first-child) > button,
  & > button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const MovieFilter: React.FunctionComponent<MovieFilterProps> = (props) => (
  <ButtonGroup>
    {filters.map(({ name, label }) => (
      <Button
        className={props.filter === name ? 'active' : ''}
        key={name}
        variant='primary'
        name={name}
        onClick={props.onClick}
        buttonType='outlined'
      >
        {label}
      </Button>
    ))}
  </ButtonGroup>
);

export default MovieFilter;
