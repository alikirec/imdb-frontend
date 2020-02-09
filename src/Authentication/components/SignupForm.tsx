import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { H1 } from '../../UiElements/Typography/Heading';
import { SignupFormProps, SignupFormValues } from '../types';
import Button from '../../UiElements/Button/Buttons';
import { FormContainer, StyledForm } from './FormElements';
import FormikInput from './FormikInput';
import {Text, TextType} from '../../UiElements/Typography/Text';
import Box from '../../UiElements/Layout/Box';

const initialValues: SignupFormValues = {
  username: '',
  password: '',
  confirmPassword: ''
};

const signupSchema = yup.object().shape<SignupFormValues>({
  username: yup
    .string()
    .min(3, 'Too short')
    .required('Required'),
  password: yup
    .string()
    .min(6, 'Too short')
    .required('Required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match')
});

const SignupForm: React.FunctionComponent<SignupFormProps> = ({ onSubmit, goToLogin }) => (
  <FormContainer>
    <H1>Signup</H1>
    <Formik
      validationSchema={signupSchema}
      initialValues={initialValues}
      isInitialValid={false}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting, isValid }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field name='username' label='Username' component={FormikInput} />
          <Field name='password' label='Password' component={FormikInput} type='password' />
          <Field name='confirmPassword' label='Confirm' component={FormikInput} type='password' />
          <Button
            variant='secondary'
            disabled={isSubmitting || !isValid}
            type='submit'
            mb={3}
            width={100}
            loading={isSubmitting}
          >
            Signup
          </Button>
          <Box display='flex' flexWrap='wrap' width='auto'>
            <Text mr={2}>Already have an account?</Text>
            <Text type={TextType.INTERACTIVE} onClick={goToLogin}>
              Login
            </Text>
          </Box>
        </StyledForm>
      )}
    </Formik>
  </FormContainer>
);

export default SignupForm;
