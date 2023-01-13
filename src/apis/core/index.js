import axios from 'axios';
import { getStorage } from '../../utils/storage';
import { TOKEN } from '../../utils/auth/constant';

const baseURL = `${process.env.REACT_APP_API_ENDPOINT}`;

// 인스턴스 생성
const baseRequest = axios.create({
  baseURL,
  timeout: 1000,
});

const authRequest = axios.create({
  baseURL,
});

const formDataRequest = axios.create({
  baseURL,
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
    config.headers.authorization = 'bearer ' + getStorage(TOKEN);
    return config;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

formDataRequest.interceptors.request.use(
  (config) => {
    config.headers.authorization = 'bearer ' + getStorage(TOKEN, '');
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

export { baseRequest, authRequest, formDataRequest };
