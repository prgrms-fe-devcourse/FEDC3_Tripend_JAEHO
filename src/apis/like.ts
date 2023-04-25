import { authRequest } from './core';
import { POST_URL } from '@/utils/constants/post';

export const createLike = async (postId: string) => {
  try {
    const { data } = await authRequest.post(POST_URL.CREATE_LIKES, {
      postId,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteLike = async (id: string) => {
  try {
    const { data } = await authRequest.delete(POST_URL.DELETE_LIKES, {
      data: {
        id,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
