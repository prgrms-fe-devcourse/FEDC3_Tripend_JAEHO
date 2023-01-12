import { authRequest, baseRequest, formDataRequest } from './core';
import swal from 'sweetalert';
import { getStorage, setStorage } from '../utils/storage';
import { ERROR_MESSAGE_AUTH, ID, TOKEN, URL, USER as AUTH, USER } from '../utils/auth/constant';
import { ERROR_MESSAGE_SIGNUP } from '../utils/auth/constant';

const { DUPLICATE_EMAIL } = ERROR_MESSAGE_SIGNUP;

// 로그인
export const postUserLogin = async (email, password) => {
  const response = await formDataRequest
    .post(URL.LOGIN, {
      email,
      password,
    })
    .catch(() => {
      swal(AUTH.LOGIN_FAILED, USER.ID_PASSWORD, ERROR_MESSAGE_AUTH.LOGIN_ERROR);
    });

  const { token } = response.data;
  const { _id } = response.data.user;

  setStorage(TOKEN, token);
  setStorage(ID, _id);

  return response;
};

// 로그인 유저 정보 가져오기 (인증된 유저)
export const getUser = async () => {
  if (!getStorage(TOKEN)) {
    throw new Error('로그인 유저가 없습니다');
  }

  try {
    return await authRequest.get(URL.AUTH_USER);
  } catch (e) {
    throw new Error('로그인 유저가 없습니다.');
  }
};

// 비밀번호 변경
export const putPaswwordChange = async (password) => {
  if (!getStorage(TOKEN)) {
    throw new Error('로그인 유저가 없습니다');
  }
  try {
    return await authRequest.put(URL.PASSWORD_UPADTE, {
      password,
    });
  } catch (e) {
    throw new Error('비밀번호가 변경되지 않았습니다.');
  }
};

export const signup = async (values) => {
  const { userName, userAge, userGender, userId, userPassword } = values;
  const fullName = `${userName}/${userAge}/${userGender}`;
  try {
    await baseRequest.post(`/signup`, {
      email: userId,
      fullName,
      password: userPassword,
    });
  } catch (error) {
    alert(DUPLICATE_EMAIL);
    return error;
  }
};
