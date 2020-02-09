import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '../../UiElements/Layout/Box';
import Spinner from '../../UiElements/Spinner';

// eslint-disable-next-line no-undef
storiesOf('Spinner', module)
  .add('Default spinner', () => (
    <Box bg='secondary.main' p={4}>
      <Spinner />
    </Box>
  ))
  .add('Colorful', () => <Spinner color='primary.main' />)
  .add('Custom size', () => <Spinner color='brandYellow' size='128px' />);
