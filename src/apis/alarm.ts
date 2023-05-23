import { URL } from '@/utils/constants/alarm';

import { authRequest } from './core';

export const getMyAlarms = async () => {
  try {
    const { data } = await authRequest.get(URL.GET_ALARM);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export const createAlarm = async (
  notificationType: string,
  notificationTypeId: string,
  userId: string,
  postId: string
) => {
  try {
    return await authRequest.post(URL.CREATE_ALARM, {
      notificationType,
      notificationTypeId,
      userId,
      postId,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
