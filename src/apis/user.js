import { USER_URL } from '../utils/constants/user';
import { baseRequest } from './core';
// 전체 유저 정보 가져오기
export const getUsers = async () => {
  try {
    const data = await baseRequest.get(USER_URL.GET_ALL_USER);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 검색된 유저 정보 가져오기
export const getUserInfo = async (keyword) => {
  try {
    const data = await baseRequest.get(USER_URL.GET_SEARCHED_USER + keyword);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 클릭된 유저 정보 가져오기
export const getClickedUserInfo = async (userId) => {
  try {
    const data = await baseRequest.get(USER_URL.GET_CLICKED_USER + userId);
    return data;
  } catch (error) {
    console.error(error);
  }
};
