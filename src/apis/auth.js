import swal from 'sweetalert';
import {
  ERROR_MESSAGE_SIGNIN,
  ERROR_MESSAGE_SIGNUP,
  ID,
  TOKEN,
  URL,
  USER as AUTH,
  USER,
  USER_IMAGE,
} from '../utils/constants/auth';
import { getStorage, setStorage } from '../utils/storage';
import { authRequest, baseRequest } from './core';

const { DUPLICATE_EMAIL } = ERROR_MESSAGE_SIGNUP;

// 로그인
export const postUserLogin = async (email, password) => {
  const response = await baseRequest
    .post(URL.LOGIN, {
      email,
      password,
    })
    .catch(() => {
      swal(AUTH.LOGIN_FAILED, USER.ID_PASSWORD, ERROR_MESSAGE_SIGNIN.LOGIN_ERROR);
    });

  const { token } = response.data;
  const { _id, image } = response.data.user;

  setStorage(TOKEN, token);
  setStorage(ID, _id);
  setStorage(USER_IMAGE, image);

  return response;
};

// 로그인 유저 정보 가져오기 (인증된 유저)
export const getUser = async () => {
  if (!getStorage(TOKEN)) {
    throw new Error(ERROR_MESSAGE_SIGNIN.EDIT_USER);
  }
  try {
    return await authRequest.get(URL.AUTH_USER);
  } catch (e) {
    throw new Error(ERROR_MESSAGE_SIGNIN.EDIT_USER);
  }
};

// 비밀번호 변경
export const putPasswordChange = async (password) => {
  if (!getStorage(TOKEN)) {
    throw new Error(ERROR_MESSAGE_SIGNIN.EDIT_USER);
  }
  try {
    return await authRequest.put(URL.PASSWORD_UPDATE, {
      password,
    });
  } catch (e) {
    throw new Error(ERROR_MESSAGE_SIGNIN.EDIT_USER);
  }
};

export const signup = async (values) => {
  const { userName, userAge, userGender, userId, userPassword } = values;
  const fullName = `${userName}/${userAge}/${userGender}`;
  try {
    await baseRequest.post(URL.SIGN_UP, {
      email: userId,
      fullName,
      password: userPassword,
    });
  } catch (error) {
    alert(DUPLICATE_EMAIL);
    return error;
  }
};
