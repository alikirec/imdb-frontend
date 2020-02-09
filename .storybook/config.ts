import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import defaultTheme from '../src/defaultTheme';

const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /\.stories\.tsx?$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);
