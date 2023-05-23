import { POST_URL } from '@/utils/constants/post';
import { authRequest } from './core';

export const createLike = async (postId: string) => {
  try {
    const { data } = await authRequest.post(POST_URL.CREATE_LIKES, {
      postId,
    });

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
