import styled from 'styled-components';

import { getBreakpoint, getColor } from '../../UiElements/themeHelpers';

export interface BurgerIconProps {
  open: boolean;
}

const BurgerIcon = styled.button<BurgerIconProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  outline: none;

  @media (min-width: ${getBreakpoint('md')}) {
    display: none;
  }
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${getColor('copy.primary')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default BurgerIcon;
