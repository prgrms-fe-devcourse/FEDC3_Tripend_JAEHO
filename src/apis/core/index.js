import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_ENDPOINT}:${process.env.REACT_APP_API_PORT}`;

// 인스턴스 생성
const baseRequest = axios.create({
  baseURL,
});

const authRequest = axios.create({
  baseURL,
});

// 요청에 대한 인터셉터 작성
baseRequest.interceptors.response.use(
  (response) => {
    const data = response.data;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authRequest.interceptors.request.use(
  (config) => {
    config.headers.authorization = 'bearer ' + localStorage.getItem('Token', '');
    return config;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

export { baseRequest, authRequest };
