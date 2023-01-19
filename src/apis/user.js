import { USER_URL } from '../utils/constants/user';
import { baseRequest } from './core';

export const getUsers = async () => {
  try {
    const data = await baseRequest.get(USER_URL.GET_ALL_USER);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserInfo = async (keyword) => {
  try {
    const data = await baseRequest.get(USER_URL.GET_SEARCHED_USER + keyword);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getClickedUserInfo = async (userId) => {
  try {
    const data = await baseRequest.get(USER_URL.GET_CLICKED_USER + userId);
    return data;
  } catch (error) {
    console.error(error);
  }
};
