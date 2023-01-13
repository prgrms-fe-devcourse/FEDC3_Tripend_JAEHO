import { authRequest, baseRequest, formDataRequest } from './core';
import { URL } from '../utils/auth/constant';

// test
const channelId = '63b93150230951110b843cee';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjk1MTAwOWJjZDMxMTk1ZGY1MDQ1NSIsImVtYWlsIjoiZG9uZ3dvb0BuYXZlci5jb20ifSwiaWF0IjoxNjczMDg5NDc2fQ.JSHRv0sMvz_L-HqE-MrKrvUIPI7Jcn0VYzD1jjWEmp4';
const postId = '63bafb514bf56420ea29af47';

export const getChannels = async () => {
  try {
    const data = await baseRequest.get(`/channels`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getChannelPosts = async (channelId) => {
  try {
    const data = await baseRequest.get(`/posts/channel/${channelId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// post 생성하기
export const createPost = async (data) => {
  /// ????
  localStorage.setItem('Token', token);

  try {
    return await formDataRequest.post(`posts/create`, data);
  } catch (error) {
    console.error(error);
  }
};

// postDetail 받아오기
export const getPostDetail = async (postId) => {
  try {
    const data = await baseRequest.get(`/posts/${postId}`);
    return data;
  } catch (error) {
    console.error(error);
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
    window.location.reload();
    return data;
  }
};

// 마이페이지 포스트 불러오기 (모달용)
export const getMyPostDetail = async (postId) => {
  return await baseRequest.get(`${URL.MYPAGE_GET_POSTER}/${postId}`);
};

// 마이페이지 게시글 수정
export const updatePost = async (post) => {
  const res = await authRequest.put(URL.MYPAGE_UPDATE, post);

  if (res.status === 200) {
    swal('수정이 완료되었습니다.');

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
  return res;
};
