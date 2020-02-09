import React from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { storiesOf } from '@storybook/react';
import { Text, TextType } from '../../../UiElements/Typography/Text';
import defaultTheme from '../../../defaultTheme';

// eslint-disable-next-line no-undef
storiesOf('Text', module)
  .addDecorator(withThemesProvider([defaultTheme]))
  .add('default', () => <Text>This is a text</Text>)
  .add('small', () => <Text small>This is a small text</Text>)
  .add('light', () => <Text type={TextType.LIGHT}>This is a light text</Text>)
  .add('interactive', () => <Text type={TextType.INTERACTIVE}>This is an interactive text</Text>)
  .add('disabled', () => <Text type={TextType.DISABLED}>This is a disabled text</Text>)
  .add('error', () => <Text type={TextType.ERROR}>This is an error text</Text>);
