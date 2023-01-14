import { POSTURL } from '../utils/constant/post';
import { authRequest, baseRequest } from './core';

export const createLike = async (postId) => {
  try {
    const { data } = await authRequest.post(POSTURL.CREATE_LIKES, {
      postId,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteLike = async (id) => {
  try {
    const { data } = await authRequest.delete(POSTURL.DELETE_LIKES, {
      data: {
        id,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
