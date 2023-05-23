import axios from 'axios';

import { BEARER, TOKEN } from '@/utils/constants/auth';
import { getStorage } from '@/utils/storage';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? import.meta.env.VITE_API_ENDPOINT
    : '/api';

const baseRequest = axios.create({
  baseURL,
});

const authRequest = axios.create({
  baseURL,
});

const postDataRequest = axios.create({
  baseURL,
});

baseRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authRequest.interceptors.request.use(
  (config) => {
    config.headers.authorization = BEARER + getStorage(TOKEN);
    return config;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

postDataRequest.interceptors.request.use(
  (config) => {
    config.headers.authorization = BEARER + getStorage(TOKEN);
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

export { baseRequest, authRequest, postDataRequest };
