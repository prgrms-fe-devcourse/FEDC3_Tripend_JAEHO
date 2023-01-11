import { authRequest } from './core';

// 나의 알림 목록
export const getMyAlarms = async () => {
  try {
    return await authRequest.get(`notifications`);
  } catch (error) {
    console.error(error);
  }
};
