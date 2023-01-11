import { authRequest, baseRequest } from './core';

// 댓글 생성하기
export const createComment = async (postId, comment) => {
  console.log(comment, postId);
  try {
    return await authRequest.post(`/comments/create`, {
      comment,
      postId,
    });
  } catch (error) {
    console.error(error);
  }
};
