import axios from 'axios';
import { refreshToken } from './refreshToken.service';
import { ACCESS_TOKEN, BASE_URL } from '../../utils/constants';
const AxiosService = () => {
  //create instance
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN) || '';

    if (accessToken) {
      config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    }

    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      const currentTime = new Date().getTime();
      response.headers['request-started-at'] = currentTime;
      return response;
    },
    (error) => {
      if (error.config && error.response?.status === 401) {
        return new Promise((resolve, reject) => {
          refreshToken(axios, error.config)
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default AxiosService;
