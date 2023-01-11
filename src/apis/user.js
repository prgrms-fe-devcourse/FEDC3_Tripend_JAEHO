import { baseRequest } from './core';

// 전체 유저 정보 가져오기
export const getUsers = async () => {
  try {
    const data = await baseRequest.get(`/users/get-users`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 검색된 유저 정보 가져오기
export const getUserInfo = async (keyword) => {
  try {
    const data = await baseRequest.get(`/search/users/${keyword}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 클릭된 유저 정보 가져오기
export const getClickedUserInfo = async (userId) => {
  try {
    const data = await baseRequest.get(`/users/${userId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
