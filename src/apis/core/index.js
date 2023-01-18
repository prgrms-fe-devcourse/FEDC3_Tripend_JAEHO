import axios from 'axios';
import { BEARER, TOKEN } from '../../utils/constant/auth';
import { getStorage } from '../../utils/storage';

const API_BASE_URL =
  process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_ENDPOINT : '/api';

// 인스턴스 생성
const baseRequest = axios.create({
  baseURL: API_BASE_URL,
});

const authRequest = axios.create({
  baseURL: API_BASE_URL,
});

const postDataRequest = axios.create({
  baseURL: API_BASE_URL,
});

// 요청에 대한 인터셉터 작성
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
