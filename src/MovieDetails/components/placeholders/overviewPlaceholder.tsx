import React from 'react';
import ContentLoader from 'react-content-loader';

import Page from '../../../UiElements/Layout/Page';
import Box from '../../../UiElements/Layout/Box';

const overviewPlaceholder = (
  <Page backgroundImage=''>
    <Box bg='rgba(0, 0, 0, 0.5)' height={484}>
      <ContentLoader foregroundColor='#ddd' viewBox='0 0 1076 484'>
        <rect x='0' y='0' width='322' height='484' />
        <circle cx='1020' cy='56' r='24' />
        <rect x='346' y='16' width='400' height='48' rx='16' ry='16' />
        <rect x='346' y='104' width='300' height='30' rx='8' ry='8' />
        <rect x='346' y='158' width='705' height='48' rx='16' ry='16' />
        <rect x='346' y='222' width='96' height='40' rx='8' ry='8' />
        <rect x='458' y='222' width='96' height='40' rx='8' ry='8' />
        <rect x='570' y='222' width='96' height='40' rx='8' ry='8' />
        <rect x='346' y='436' width='270' height='24' rx='8' ry='8' />
        <rect x='632' y='436' width='170' height='24' rx='8' ry='8' />
        <rect x='818' y='436' width='220' height='24' rx='8' ry='8' />
      </ContentLoader>
    </Box>
  </Page>
);

export default overviewPlaceholder;
