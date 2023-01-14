import { POSTURL } from '../utils/constant/post';
import { authRequest } from './core';

// 댓글 생성하기
export const createComment = async (postId, comment) => {
  try {
    return await authRequest.post(POSTURL.CREATE_COMMENTS, {
      comment,
      postId,
    });
  } catch (error) {
    console.error(error);
  }
};
