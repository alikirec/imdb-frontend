import { DefaultTheme, StyledProps } from 'styled-components';
import { path } from 'ramda';

const convertShadowToLight = (shadow: string | undefined) =>
  shadow && shadow.replace(/0,\s?0,\s?0/g, '255, 255, 255');

export const getColor = (colorName: string) => (
  props: StyledProps<{ theme: DefaultTheme }>
): string | undefined => path(['theme', 'colors', ...colorName.split('.')], props);

export const getFontSize = (fontSize: number) => (
  props: StyledProps<{ theme: DefaultTheme }>
): string | undefined => path(['theme', 'fontSizes', fontSize], props);

export const getSpace = (index: number) => (
  props: StyledProps<{ theme: DefaultTheme }>
): string | undefined => path(['theme', 'space', index], props);

export const getShadow = (index: number, isLight = false) => (
  props: StyledProps<{ theme: DefaultTheme }>
): string | undefined => {
  const shadow = path<string>(['theme', 'shadows', index], props);
  if (!isLight) {
    return shadow;
  }

  return convertShadowToLight(shadow);
};

export const getBreakpoint = (name: string) => (
  props: StyledProps<{ theme: DefaultTheme }>
): string | undefined => path(['theme', 'breakpoints', name], props);

export const getBreakpointWidth = (name: string) => (
  props: StyledProps<{ theme: DefaultTheme }>
): number => {
  const breakPoint = path<string>(['theme', 'breakpoints', name], props);
  if (breakPoint) {
    return parseInt(breakPoint);
  }

  return 0;
};
