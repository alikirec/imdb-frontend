import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { space, layout, SpaceProps, LayoutProps } from 'styled-system';

import { getColor, getFontSize, getSpace } from '../themeHelpers';
import Box from '../Layout/Box';
import { Text, TextType } from '../Typography/Text';

const Label = styled(Text)`
  margin-bottom: 0;
  margin-right: ${getSpace(2)};
  padding: ${getSpace(2)} 0;
  line-height: 1;
  text-transform: capitalize;
  font-weight: 500;
`;

interface CustomInputProps {
  noBorder?: boolean;
  unit?: string | React.ReactNode;
  label?: string | React.ReactNode;
  error?: string | React.ReactNode;
  labelColor?: string;
  unitColor?: string;
}

export type InputProps = CustomInputProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  SpaceProps &
  LayoutProps;

const StyledInput = styled.input<StyledProps<InputProps>>`
  background: white;
  border: ${(props) => (props.noBorder ? 'none' : '1px solid')};
  border-color: ${(props) =>
    props.error ? getColor('error')(props) : `${getColor('copyTwo')(props)}51`}; // 0.2 opacity

  border-radius: 4px;
  color: ${getColor('copyOne')};
  font-size: ${getFontSize(2)};
  outline: none;
  padding: ${getSpace(2)} ${getSpace(1)};
  &:focus {
    border-color: ${getColor('primary')};
  }

  &:disabled {
    background: ${getColor('disabled')};
  }

  &::placeholder {
    font-size: ${getFontSize(1)};
  }
  ${space};
  ${layout};
`;

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { label, labelColor, unit, unitColor, error, ...rest } = props;
  return (
    <Box display='flex' width='auto'>
      {label && <Label color={labelColor}>{label}</Label>}
      <Box width='auto'>
        <StyledInput {...rest} error={error} />
        {error && (
          <Text mb='0' mt={1} small color='error'>
            {error}
          </Text>
        )}
      </Box>
      {unit && (
        <>
          &nbsp;
          <Text color={unitColor} ml={1} mb={0} type={TextType.LIGHT}>
            {unit}
          </Text>
        </>
      )}
    </Box>
  );
};
