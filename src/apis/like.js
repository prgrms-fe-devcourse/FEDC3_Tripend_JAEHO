import { authRequest, baseRequest } from './core';

export const createLike = async (postId) => {
  try {
    const { data } = await authRequest.post(`/likes/create`, {
      postId,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteLike = async (id) => {
  try {
    const { data } = await authRequest.delete(`/likes/delete`, {
      data: {
        id,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
