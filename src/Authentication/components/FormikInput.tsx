import React from 'react';
import { omit } from 'ramda';
import { FieldProps } from 'formik';

import Box from '../../UiElements/Layout/Box';
import { Input, InputProps } from '../../UiElements/Input/Input';

const FormikInput: React.FunctionComponent<FieldProps<string | number> & InputProps> = (props) => {
  const { field, form, ...inputProps } = props;
  const inputPropsToPassDown = omit(['name', 'value', 'onChange', 'onBlur', 'error'], inputProps);

  const touched = form.touched[field.name];
  const errorCopy = form.errors[field.name];

  const error = (touched && errorCopy) || undefined;

  return (
    <Box width='auto' mb={3}>
      <Input {...field} error={error} {...inputPropsToPassDown} />
    </Box>
  );
};

export default FormikInput;
