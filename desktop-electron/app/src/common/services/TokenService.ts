/* eslint-disable @typescript-eslint/no-explicit-any */
import { ACCESS_TOKEN } from '../../utils/constants';

export const storeToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const getAccessToken: any = async () => {
  const access_token = await localStorage.getItem(ACCESS_TOKEN);
  if (access_token) {
    return access_token;
  }
  return null;
};

export const logOut = () => {
  localStorage.clear();
};

export const isUserLoggedIn = () => {
  const access_token = localStorage.getItem(ACCESS_TOKEN);
  return access_token !== null;
};

export const getItemFromLocalStorage = (key: string) => {
  const localItem = localStorage.getItem(key);
  return localItem ?? '{}';
};
