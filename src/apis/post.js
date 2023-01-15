import { authRequest, baseRequest, formDataRequest } from './core';
import { URL } from '../utils/constant/auth';
import { POSTURL, ERROR_MESSAGE_POST } from '../utils/constant/post';

export const getChannels = async () => {
  try {
    const data = await baseRequest.get(POSTURL.CHANNELS);

    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_CHANNELS);
  }
};

export const getChannelPosts = async (channelId) => {
  try {
    const data = await baseRequest.get(POSTURL.POSTS_IN_CHANNEL + channelId);
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_POSTS);
  }
};

// post 생성하기
export const createPost = async (data) => {
  try {
    return await formDataRequest.post(POSTURL.CREATE_POST, data);
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_CREATE_POST);
  }
};

// postDetail 받아오기
export const getPostDetail = async (postId) => {
  try {
    const data = await baseRequest.get(POSTURL.POST_DETAIL + postId);
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_POSTDETAIL);
  }
};

// 마이페이지 (게시글 삭제)
export const removePost = async (postId) => {
  const data = await authRequest.delete(URL.MYPAGE_DELETE, {
    data: {
      id: postId,
    },
  });

  if (data.status === 200) {
    return data;
  }
};

// 마이페이지 포스트 불러오기 (모달용)
export const getMyPostDetail = async (postId) => {
  return await baseRequest.get(POSTURL.POST_DETAIL + postId);
};

// 마이페이지 게시글 수정
export const updatePost = async (post) => {
  const res = await authRequest.put(URL.MYPAGE_UPDATE, post);
  if (res.status === 200) {
    // 임시 리렌더링 코드
    return res;
  }
};
