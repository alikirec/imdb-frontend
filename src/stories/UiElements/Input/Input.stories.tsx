import React from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { storiesOf } from '@storybook/react';
import { Input } from '../../../UiElements/Input/Input';
import defaultTheme from '../../../defaultTheme';

// eslint-disable-next-line no-undef
storiesOf('Input', module)
  .addDecorator(withThemesProvider([defaultTheme]))
  .add('Default input', () => <Input placeholder='type...' />)
  .add('Disabled', () => <Input disabled />)
  .add('With label', () => <Input label='age' />)
  .add('With unit', () => <Input unit='kg' value={12} />)
  .add('With error', () => <Input error='Must be filled' label='Username:' />);
