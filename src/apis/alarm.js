import { authRequest, baseRequest } from './core';

// 알림 생성하기
export const createAlarm = async (notificationType, notificationTypeId, userId, postId) => {
  try {
    return await authRequest.post(`/notifications/create`, {
      notificationType,
      notificationTypeId,
      userId,
      postId,
    });
  } catch (error) {
    console.error(error);
  }
};
