import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from './UiElements/Typography/Text';
import Button from './UiElements/Button/Buttons';
import PageBackgroundImage from './UiElements/PageBackgroundImage';
import Box from './UiElements/Layout/Box';

const NotFoundContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    z-index: 2;
  }
`;

const NotFoundFade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const NotFound: React.FunctionComponent = () => (
  <Box position='relative' height='100%'>
    <PageBackgroundImage src='https://i2.wp.com/metro.co.uk/wp-content/uploads/2015/12/john-travolta1.jpg' />
    <NotFoundFade />
    <NotFoundContent>
      <Text color='common.white' fontSize={6} mb={5}>
        404
      </Text>
      <Text color='common.white'>There is nothing here</Text>
      <Link to='/'>
        <Button variant='primary' buttonType='outlined'>
          Return to homepage
        </Button>
      </Link>
    </NotFoundContent>
  </Box>
);

export default NotFound;
