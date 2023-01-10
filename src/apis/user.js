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
