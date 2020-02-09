import styled, { css, StyledProps } from 'styled-components';
import { color, space, typography } from 'styled-system';

import { getColor, getFontSize, getSpace } from '../themeHelpers';
import { CommonProps } from './types';

export const BaseStyle = css`
  color: ${getColor('copy.primary')};
  line-height: 1.5;
  margin-top: 0;
`;

export enum TextType {
  DISABLED = 'disabled',
  ERROR = 'error',
  INTERACTIVE = 'interactive',
  LIGHT = 'light'
}

interface TextProps {
  type?: TextType;
  small?: boolean;
}

const getColorName = (props: TextProps): string => {
  switch (props.type) {
    case TextType.DISABLED:
      return 'action.disabled';
    case TextType.ERROR:
      return 'error';
    case TextType.INTERACTIVE:
      return 'primary.main';
    case TextType.LIGHT:
      return 'copy.secondary';
    default:
      return '';
  }
};

export const Text = styled.p<StyledProps<TextProps & CommonProps>>`
  ${BaseStyle};
  color: ${(props) => getColor(getColorName(props))(props)};
  font-size: ${(props) => (props.small ? getFontSize(1)(props) : getFontSize(2)(props))};
  font-weight: normal;
  margin-bottom: ${getSpace(3)};
  cursor: ${(props) => (props.type === TextType.INTERACTIVE ? 'pointer' : 'default')};
  ${space};
  ${typography};
  ${color};
`;

export const Span = styled.span<StyledProps<CommonProps>>`
  ${space};
  ${typography};
  ${color};
`;
