import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { H1 } from '../../UiElements/Typography/Heading';
import { LoginFormProps, LoginFormValues } from '../types';
import Button from '../../UiElements/Button/Buttons';
import Box from '../../UiElements/Layout/Box';
import { Text, TextType } from '../../UiElements/Typography/Text';
import { FormContainer, StyledForm } from './FormElements';
import FormikInput from './FormikInput';

const initialValues: LoginFormValues = {
  username: '',
  password: ''
};

const loginSchema = yup.object().shape<LoginFormValues>({
  username: yup
    .string()
    .min(3, 'Too short')
    .required('Required'),
  password: yup
    .string()
    .min(6, 'Too short')
    .required('Required')
});

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ onSubmit, goToSignup }) => (
  <FormContainer data-cy='loginForm'>
    <H1>Login</H1>
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      isInitialValid={false}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting, isValid }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field name='username' label='Username' component={FormikInput} data-cy='username' />
          <Field
            name='password'
            label='Password'
            component={FormikInput}
            type='password'
            data-cy='password'
          />
          <Button
            variant='secondary'
            disabled={isSubmitting || !isValid}
            type='submit'
            mb={3}
            width={100}
            loading={isSubmitting}
            data-cy='submit'
          >
            Login
          </Button>
          <Box display='flex' flexWrap='wrap' width='auto'>
            <Text mr={2}>Don&apos;t have an account?</Text>
            <Text type={TextType.INTERACTIVE} onClick={goToSignup}>
              create now
            </Text>
          </Box>
        </StyledForm>
      )}
    </Formik>
  </FormContainer>
);

export default LoginForm;
