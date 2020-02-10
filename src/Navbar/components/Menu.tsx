import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

import Button from '../../UiElements/Button/Buttons';
import {
  getBreakpoint,
  getColor,
  getFontSize,
  getShadow,
  getSpace
} from '../../UiElements/themeHelpers';
import { MenuProps, MenuOwnProps } from '../types';

const StyledMenu = styled.div<MenuOwnProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 160px;
  display: flex;
  flex-direction: column;
  /* 105% to hide the shadow as well */
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-105%)')};
  box-shadow: ${getShadow(9)};
  background: rgba(255, 255, 255, 0.9);
  text-align: left;
  padding: ${getSpace(3)} ${getSpace(2)};
  transition: transform 0.3s ease-in-out;
  a {
    outline: none;
    font-size: ${getFontSize(2)};
    border-bottom: 1px solid ${getColor('copy.primary')};
    text-transform: uppercase;
    padding: ${getSpace(3)};
    font-weight: bold;
    color: ${getColor('copy.primary')};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (hover: hover) {
      &:hover {
        color: ${getColor('primary.main')};
      }
    }
  }

  @media (min-width: ${getBreakpoint('md')}) {
    position: relative;
    flex-direction: row;
    transform: none;
    padding: 0;
    background-color: transparent;
    align-items: center;
    width: 100%;
    a {
      font-size: ${getFontSize(2)};
      padding: 0 ${getSpace(2)};
      border-bottom: none;
    }
    box-shadow: ${getShadow(0)};
  }
`;

const Menu: React.FunctionComponent<MenuProps> = ({ open, isAuthenticated, logout, ...props }) => {
  const tabIndex = open ? -1 : 0;

  return (
    <StyledMenu open={open} aria-hidden={!open} {...props}>
      <Link to='/' tabIndex={tabIndex}>
        <FontAwesomeIcon icon={faList} size='lg' />
        &nbsp;&nbsp;Movies
      </Link>
      <a
        href='https://github.com/alikirec'
        rel='noopener noreferrer'
        tabIndex={tabIndex}
        target='_blank'
      >
        <FontAwesomeIcon icon={faGithub} size='lg' />
      </a>
      {isAuthenticated ? (
        <>
          <Link to='/watch-list' tabIndex={tabIndex}>
            <Button variant='secondary' buttonType='outlined'>
              My list
            </Button>
          </Link>
          <Button variant='secondary' buttonType='outlined' onClick={logout} data-cy='logout'>
            Logout
          </Button>
        </>
      ) : (
        <Link to='/authenticate' tabIndex={tabIndex}>
          <Button variant='secondary' buttonType='outlined'>
            Login
          </Button>
        </Link>
      )}
    </StyledMenu>
  );
};

export default Menu;
