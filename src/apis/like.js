import { POST_URL } from '../utils/constants/post';
import { authRequest, baseRequest } from './core';

export const createLike = async (postId) => {
  try {
    const { data } = await authRequest.post(POST_URL.CREATE_LIKES, {
      postId,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteLike = async (id) => {
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
