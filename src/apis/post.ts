import { URL } from '@/utils/constants/auth';
import { ERROR_MESSAGE_POST, POST_URL } from '@/utils/constants/post';
import { authRequest, baseRequest, postDataRequest } from './core';
import { Channel } from '@/types/channel/channel.interface';

export const getChannel = async () => {
  try {
    const data = await baseRequest.get(POST_URL.CHANNELS);

    if (data.status !== 200) {
      throw new Error(ERROR_MESSAGE_POST.ERROR_CHANNELS);
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChannels = async () => {
  try {
    const data = await baseRequest.get(POST_URL.CHANNELS);

    if (data.status !== 200) {
      throw new Error(ERROR_MESSAGE_POST.ERROR_CHANNELS);
    }

    const channels: Channel[] = data.data;

    const eastEurope = channels.filter(({ description }) => description === '동유럽');
    const westEurope = channels.filter(
      ({ description }: { description: string }) => description === '서유럽'
    );
    const southEurope = channels.filter(
      ({ description }: { description: string }) => description === '남유럽'
    );
    const northEurope = channels.filter(
      ({ description }: { description: string }) => description === '북유럽'
    );

    return {
      eastEurope,
      westEurope,
      southEurope,
      northEurope,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getChannelPosts = async (channelId: string) => {
  try {
    const data = await baseRequest.get(POST_URL.POSTS_IN_CHANNEL + channelId);
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_POSTS);
  }
};

export const createPost = async (data: any) => {
  //usePostForm의 type으로 넣기
  try {
    return await postDataRequest.post(POST_URL.CREATE_POST, data);
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_CREATE_POST);
  }
};

export const getAllPosts = async () => {
  try {
    const data = await baseRequest.get(POST_URL.ALL_POST);
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_POST_DETAIL);
  }
};

export const getPostDetail = async (postId: string) => {
  try {
    const data = await baseRequest.get(POST_URL.POST_DETAIL + postId);
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_POST_DETAIL);
  }
};

export const removePost = async (postId: string) => {
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

export const getMyPostDetail = async (postId: string) => {
  const { data } = await baseRequest.get(POST_URL.POST_DETAIL + postId);
  return data;
};

export const updatePost = async (post: FormData) => {
  console.log();
  const res = await authRequest.put(URL.MYPAGE_UPDATE, post);

  if (res.status === 200) {
    window.location.reload();
  }
  return res;
};
