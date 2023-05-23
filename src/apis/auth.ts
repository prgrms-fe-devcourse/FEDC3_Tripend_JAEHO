import { SignupFormValues, LoginProps } from '@/types/auth/auth.interfaces';
import {
  USER as AUTH,
  ERROR_MESSAGE_SIGNIN,
  ERROR_MESSAGE_SIGNUP,
  TOKEN,
  URL,
  USER,
} from '@/utils/constants/auth';
import { getStorage } from '@/utils/storage';
import swal from 'sweetalert';
import { authRequest, baseRequest } from './core';

const { DUPLICATE_EMAIL } = ERROR_MESSAGE_SIGNUP;

export const postUserLogin = async (values: LoginProps) => {
  const { email, password } = values;

  try {
    const response = await baseRequest.post(URL.LOGIN, {
      email,
      password,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    swal(AUTH.LOGIN_FAILED, USER.ID_PASSWORD, ERROR_MESSAGE_SIGNIN.LOGIN_ERROR);
  }
};

export const getUser = async () => {
  if (!getStorage(TOKEN)) {
    throw new Error(ERROR_MESSAGE_SIGNIN.EDIT_USER);
  }
  try {
    const { data } = await authRequest.get(URL.AUTH_USER);
    return data;
  } catch (e) {
    throw new Error(ERROR_MESSAGE_SIGNIN.EDIT_USER);
  }
};

export const putPasswordChange = async (password: string) => {
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

export const signup = async (values: SignupFormValues) => {
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
