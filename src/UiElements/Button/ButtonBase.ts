import React from 'react';
import { css, StyledProps } from 'styled-components';

import { getFontSize, getSpace } from '../themeHelpers';

export type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase = css<StyledProps<ButtonBaseProps>>`
  padding: ${getSpace(2)} ${getSpace(3)};
  font-size: ${getFontSize(2)};
  font-weight: 500;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export default ButtonBase;
