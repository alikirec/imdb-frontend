import 'styled-components';

type Palette = { [key: string]: string | Palette };

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: Palette;
    fontSizes: string[];
    fontWeights: number[];
    space: string[];
    breakpoints: Record<string, string>;
    shadows: string[];
  }
}
