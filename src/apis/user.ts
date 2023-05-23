import { USER_URL } from '@/utils/constants/user';
import { baseRequest } from './core';

export const getUsers = async () => {
  try {
    const { data } = await baseRequest.get(USER_URL.GET_ALL_USER);

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export const getUserInfo = async (keyword: string) => {
  try {
    const { data } = await baseRequest.get(
      USER_URL.GET_SEARCHED_USER + keyword
    );
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export const getClickedUserInfo = async (userId: string) => {
  try {
    const data = await baseRequest.get(USER_URL.GET_CLICKED_USER + userId);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
