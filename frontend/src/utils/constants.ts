import { IFormElement } from '../common/models/IFormElement';

export const LOGIN_FORMS: IFormElement[] = [
  {
    name: 'email',
    label: 'Email address',
    placeholder: 'Email address',
    type: 'text',
    is_required: true,
    required_message: 'Please enter your email address',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    is_required: true,
    required_message: 'Please enter your password',
  },
];

export const SIGNUP_FORMS: IFormElement[] = [
  {
    name: 'name',
    label: 'Full name',
    placeholder: 'Full name',
    type: 'text',
    is_required: true,
    required_message: 'Please enter your name',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email address',
    type: 'text',
    is_required: true,
    required_message: 'Please enter your email address',
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: 'Phone number',
    type: 'text',
    is_required: true,
    required_message: 'Please enter your phone number',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    is_required: true,
    required_message: 'Please enter your password',
  },
];

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';
export const BASE_URL = process.env.API_URL as string;
