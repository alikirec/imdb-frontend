import React from 'react';
import styled, {
  keyframes,
  css,
  StyledProps,
  FlattenInterpolation,
  StyledComponent,
  DefaultTheme
} from 'styled-components';
import { space, layout, SpaceProps, LayoutProps } from 'styled-system';

import { getColor, getShadow } from '../themeHelpers';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';
import { ButtonType, ButtonVariant } from './types';
import Spinner from '../Spinner';

interface CustomProps {
  variant?: ButtonVariant;
  buttonType?: ButtonType;
  loading?: boolean;
}

type ButtonProps = ButtonBaseProps & CustomProps & SpaceProps & LayoutProps;
type StyledButtonProps = StyledProps<ButtonProps>;

const rippleKeyFrame = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: .5;
  }
  100% {
    width: 200%;
    height: 400%;
    opacity: 0;
  }
`;

const Ripple = css`
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: currentColor;
    visibility: hidden;
    z-index: 2;
  }

  &:not(:active):before {
    animation: ${rippleKeyFrame} 0.8s cubic-bezier(0, 0, 0.2, 1);
    transition: visibility 0.8s step-end;
  }

  &:active:before {
    visibility: visible;
  }
`;

const getBlockVariantStyle = (
  props: StyledButtonProps
): FlattenInterpolation<StyledButtonProps> | string => {
  const { variant } = props;
  if (!props.variant) {
    return '';
  }

  return css<StyledButtonProps>`
    color: ${getColor(`${variant}.contrastText`)};
    background-color: ${getColor(`${variant}.main`)};
    &:hover:enabled {
      background-color: ${getColor(`${variant}.dark`)};
      @media (hover: none) {
        background-color: ${getColor(`${variant}.main`)};
      }
    }

    &:disabled {
      color: ${getColor(`${variant}.contrastText`)}B0;
      box-shadow: ${getShadow(0)};
      background-color: ${getColor(`${variant}.main`)}B0;
    }
  `;
};

export const BlockButton = styled.button<StyledButtonProps>`
  ${ButtonBase};
  ${Ripple};
  color: ${getColor('copy.primary')};
  background-color: ${getColor('grey.300')};
  box-shadow: ${getShadow(2)};
  &:hover:enabled {
    background-color: ${getColor('grey.A100')};
    box-shadow: ${getShadow(4)};
    @media (hover: none) {
      box-shadow: ${getShadow(2)};
      background-color: ${getColor('grey.300')};
    }
  }

  &:active {
    box-shadow: ${getShadow(8)};
  }

  &:disabled {
    color: ${getColor('action.disabled')};
    box-shadow: ${getShadow(0)};
    background-color: ${getColor('action.disabledBackground')};
  }
  ${getBlockVariantStyle};
  ${space};
  ${layout};
`;

const getOutlineVariantStyle = (
  props: StyledButtonProps
): FlattenInterpolation<StyledButtonProps> | string => {
  const { variant } = props;
  if (!props.variant) {
    return '';
  }

  return css<StyledButtonProps>`
    border-color: ${getColor(`${variant}.main`)}3A;
    color: ${getColor(`${variant}.main`)};
    &:hover:enabled {
      background-color: ${getColor(`${variant}.main`)}14;
      @media (hover: none) {
        background-color: transparent;
      }
    }
  `;
};

export const OutlinedButton = styled.button<StyledButtonProps>`
  ${ButtonBase};
  ${Ripple};
  border: 1px solid ${getColor('black')}3A; /* 0.23 opacity */
  background-color: transparent;
  &:hover:enabled {
    background-color: ${getColor('black')}14; /* 0.08 opacity */
    @media (hover: none) {
      background-color: transparent;
    }
  }
  &:disabled {
    color: ${getColor('action.disabled')};
    border: 1px solid ${getColor('action.disabled')};
  }
  ${getOutlineVariantStyle};
  ${space};
  ${layout};
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Button: React.FunctionComponent<ButtonProps> = ({
  buttonType = 'block',
  loading,
  children,
  ...rest
}) => {
  const Component: StyledComponent<'button', DefaultTheme, ButtonProps> =
    buttonType === 'block' ? BlockButton : OutlinedButton;

  const spinnerColor =
    buttonType === 'outlined' ? `${rest.variant}.main` : `${rest.variant}.contrastText`;

  return (
    <Component {...rest}>
      {loading && (
        <SpinnerContainer>
          <Spinner size='24px' thickness='4px' color={spinnerColor} />
        </SpinnerContainer>
      )}
      {children}
    </Component>
  );
};

export default Button;
