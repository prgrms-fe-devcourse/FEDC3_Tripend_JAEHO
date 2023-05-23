import { POST_URL } from '@/utils/constants/post';
import { authRequest } from './core';

export const createComment = async (postId: string, comment: string) => {
  try {
    return await authRequest.post(POST_URL.CREATE_COMMENTS, {
      comment,
      postId,
    });
  } catch (error) {
    console.error(error);
  }
};
