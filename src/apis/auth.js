import { baseRequest } from './core';
import swal from 'sweetalert';
import { getStorage, setStorage } from '../utils/storage';
import { AUTH, BEARER, ERROR_MESSAGE, TOKEN, URL, USER } from '../utils/auth/constant';

// 로그인
export const postUserLogin = async (email, password) => {
  const response = await baseRequest
    .post(URL.LOGIN, {
      email,
      password,
    })
    .catch(() => {
      swal(AUTH.LOGIN_FAILED, USER.ID_PASSWORD, ERROR_MESSAGE.AUTH_ERROR);
    });

  setStorage(TOKEN, response.data.token);
  return response;
};

// 로그인 유저 정보 가져오기 (인증된 유저)
export const getUser = async () => {
  return await baseRequest.get(URL.AUTH_USER, {
    headers: {
      Authorization: `${BEARER} ${getStorage(TOKEN)}`,
    },
  });
};
