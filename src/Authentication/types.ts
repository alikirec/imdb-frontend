import { FormikHelpers } from 'formik';
import { WatchListItem } from '../Movies/types';

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface SignupFormValues {
  username: string;
  password: string;
  confirmPassword: string;
}

export type LoginOnSubmit = (
  values: LoginFormValues,
  formikHelpers: FormikHelpers<LoginFormValues>
) => void;

export type SignupOnSubmit = (
  values: SignupFormValues,
  formikHelpers: FormikHelpers<SignupFormValues>
) => void;

export interface User {
  id: string;
  username: string;
  watchList: WatchListItem[];
}

export interface AuthenticationState {
  user?: User;
  loggingIn: boolean;
  signingUp: boolean;
}

export interface LoginDispatchProps {
  onSubmit: LoginOnSubmit;
}

export interface LoginOwnProps {
  goToSignup(): void;
}

export type LoginFormProps = LoginDispatchProps & LoginOwnProps;

export interface SignupDispatchProps {
  onSubmit: SignupOnSubmit;
}

export interface SignupOwnProps {
  goToLogin(): void;
}

export type SignupFormProps = SignupDispatchProps & SignupOwnProps;
