import styled from 'styled-components';

import { getBreakpoint, getFontSize, getSpace } from '../../UiElements/themeHelpers';

const StyledAutosuggest = styled.div`
  position: relative;
  width: auto;
  margin-left: ${getSpace(3)};

  @media (min-width: ${getBreakpoint('md')}) {
    margin-left: ${getSpace(6)};
  }
  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    width: 140px;
    height: 32px;
    padding: ${getSpace(2)};
    @media (min-width: ${getBreakpoint('md')}) {
      width: 240px;
      padding: ${getSpace(2)} ${getSpace(3)};
    }
    font-weight: 400;
    font-size: ${getFontSize(2)};
    border: 1px solid #aaa;
    border-radius: 4px;
    -webkit-appearance: none;
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input::-ms-clear {
    display: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 32px;
    width: 150px;
    @media (min-width: ${getBreakpoint('md')}) {
      width: 240px;
    }
    border: 1px solid #aaa;
    background-color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 0;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
`;

export default StyledAutosuggest;
