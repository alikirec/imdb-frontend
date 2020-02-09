import React, { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Box from '../../UiElements/Layout/Box';
import { getBreakpoint, getColor, getFontSize, getSpace } from '../../UiElements/themeHelpers';
import Menu from '../containers/Menu';
import SearchBox from '../containers/SearchBox';
import { useOnClickOutside } from '../useOnClickOutside';
import Burger from './Burger';

const Icon = styled.i`
  color: ${getColor('brandYellow')};
  font-size: 36px;
`;

const LogoCopy = styled.p`
  color: ${getColor('brandYellow')};
  margin-left: ${getSpace(3)};
  margin-bottom: 0;
  line-height: 1;
  font-size: ${getFontSize(5)};
  font-family: 'Lobster', cursive;
  margin-top: 0;
  user-select: none;
  display: none;

  @media (min-width: ${getBreakpoint('md')}) {
    display: block;
  }
`;

const Nav = styled.nav`
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  padding: ${getSpace(3)} ${getSpace(2)};
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  box-shadow: 0 3px 1px -2px rgba(255, 255, 255, 0.1), 0 2px 2px 0 rgba(255, 255, 255, 0.1),
    0 1px 5px 0 rgba(255, 255, 255, 0.1);
  transition: left 0.3s ease-in-out;
  z-index: 999;
`;

interface NavbarProps {
  open: boolean;
  setOpen(value: React.SetStateAction<boolean>): void;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ open, setOpen }) => {
  const node = useRef<HTMLDivElement>(null);
  const menuId = 'main-menu';

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.outerWidth >= 960) {
        setOpen(false);
      }
    });
  }, []);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Nav>
      <Box display='flex' flexShrink={0} width='auto'>
        <Link aria-current='page' to='/'>
          <Icon className='material-icons' aria-hidden>
            camera_roll
          </Icon>
        </Link>
        <LogoCopy>React Movies</LogoCopy>
        <SearchBox />
      </Box>
      <Box display='flex' flexDirection='row-reverse' ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} id={menuId} />
        </FocusLock>
      </Box>
    </Nav>
  );
};

export default Navbar;
