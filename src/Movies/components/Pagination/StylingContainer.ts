import styled from 'styled-components';
import { getBreakpoint, getColor, getFontSize, getSpace } from '../../../UiElements/themeHelpers';

const StylingContainer = styled.div`
  width: 100%;
  ul {
    list-style: none;
    padding-left: 0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    color: ${getColor('grey.100')};
    font-size: ${getFontSize(2)};
    margin: 30px 0 0 0;
    background-color: rgba(0, 0, 0, 0.5);
    li {
      padding: ${getSpace(1)};
      margin: ${getSpace(1)};
      @media (min-width: ${getBreakpoint('sm')}) {
        padding: ${getSpace(2)};
        margin: ${getSpace(2)};
      }
      a {
        color: ${getColor('grey.100')};
        padding: 5px;
        cursor: pointer;
        outline: none;
      }

      &.disabled {
        a {
          cursor: not-allowed;
          color: ${getColor('grey.400')};
        }
      }

      &.active {
        border: 3px solid ${getColor('grey.400')};
        border-radius: 50%;
      }
    }
  }
`;

export default StylingContainer;
