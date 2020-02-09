import React from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3 } from '../../../UiElements/Typography/Heading';
import defaultTheme from '../../../defaultTheme';

// eslint-disable-next-line no-undef
storiesOf('Heading', module)
  .addDecorator(withThemesProvider([defaultTheme]))
  .add('H1', () => <H1>H1 Heading</H1>)
  .add('H2', () => <H2>H2 Heading</H2>)
  .add('H3', () => <H3>H3 Heading</H3>);
