/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';
import { ACCESS_TOKEN, BASE_URL, REFRESH_TOKEN } from '../../utils/constants';
import { backend_url } from '../../utils/backend_routes';

const getToken = () => {
  const refresh_token = localStorage.getItem(REFRESH_TOKEN);
  const formData = {
    refresh: refresh_token,
  };
  return axios.post(`${BASE_URL}${backend_url.refreshToken}`, formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(REFRESH_TOKEN)}`,
    },
  });
};

export const refreshToken = (axios: any, config: any) => {
  return new Promise((resolve, reject) => {
    getToken()
      .then((response: any) => {
        const access_token = response.data?.access;
        const refresh_token = response.data?.refresh;

        localStorage.setItem(ACCESS_TOKEN, access_token);
        localStorage.setItem(REFRESH_TOKEN, refresh_token);

        config.headers.Authorization = `Bearer ${access_token}`;
        axios
          .request(config)
          .then((result: unknown) => {
            return resolve(result);
          })
          .catch((err: unknown) => {
            return reject(err);
          });
      })
      .catch((err: AxiosError) => console.log(err.message));
  });
};
