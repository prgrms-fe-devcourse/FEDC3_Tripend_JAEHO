import { authRequest } from './core';
import { URL } from '../utils/constant/alarm';

// 나의 알림 목록
export const getMyAlarms = async () => {
  try {
    return await authRequest.get(URL.GET_ALARM);
  } catch (error) {
    console.error(error);
  }
};

// 알림 생성하기
export const createAlarm = async (notificationType, notificationTypeId, userId, postId) => {
  try {
    return await authRequest.post(URL.CREATE_ALARM, {
      notificationType,
      notificationTypeId,
      userId,
      postId,
    });
  } catch (error) {
    console.error(error);
  }
};
