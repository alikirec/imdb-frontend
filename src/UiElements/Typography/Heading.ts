import React from 'react';
import styled, { css, StyledProps } from 'styled-components';
import { color, space, typography } from 'styled-system';

import { getFontSize, getSpace } from '../themeHelpers';
import { BaseStyle } from './Text';
import { CommonProps } from './types';

type HeadingProps = StyledProps<CommonProps & React.HTMLAttributes<HTMLHeadingElement>>;

const commonStyle = css`
  ${color};
  ${space};
  ${typography};
`;

export const H1 = styled.h1<HeadingProps>`
  ${BaseStyle};
  font-size: ${getFontSize(5)};
  margin-bottom: ${getSpace(6)};
  ${commonStyle};
`;

export const H2 = styled.h2<HeadingProps>`
  ${BaseStyle};
  font-size: ${getFontSize(4)};
  margin-bottom: ${getSpace(5)};
  ${commonStyle};
`;

export const H3 = styled.h3<HeadingProps>`
  ${BaseStyle};
  font-size: ${getFontSize(3)};
  margin-bottom: ${getSpace(4)};
  ${commonStyle}
`;
