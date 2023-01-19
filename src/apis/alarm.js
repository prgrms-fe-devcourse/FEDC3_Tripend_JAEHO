import { URL } from '../utils/constants/alarm';
import { authRequest } from './core';

export const getMyAlarms = async () => {
  try {
    return await authRequest.get(URL.GET_ALARM);
  } catch (error) {
    console.error(error);
  }
};

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
