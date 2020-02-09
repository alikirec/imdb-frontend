import React from 'react';

import Spinner from './Spinner';
import Box from './Layout/Box';

const PageSpinner: React.FunctionComponent = () => (
  <Box display='flex' mt='25%' justifyContent='center'>
    <Spinner size='96px' />
  </Box>
);

export default PageSpinner;
