import React from 'react';
import styled from 'styled-components';

import PageBackgroundImage from '../PageBackgroundImage';
import Box from './Box';

const GradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

interface PageProps {
  backgroundImage?: string;
}

const Page: React.FunctionComponent<PageProps> = ({ backgroundImage, children }) => (
  <Box px={{ _: 2, sm: 3, md: 5 }} py={7} maxWidth={1140} margin='auto'>
    <GradientOverlay />
    {backgroundImage && <PageBackgroundImage src={backgroundImage} />}
    {children}
  </Box>
);

export default Page;
