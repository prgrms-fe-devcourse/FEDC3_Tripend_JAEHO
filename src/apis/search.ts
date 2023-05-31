import { POST_URL } from '@/utils/constants/post';
import { baseRequest } from './core';

export const searchAll = async (keyword: string) => {
  try {
    const { data } = await baseRequest.get(POST_URL.SEARCH_POST + keyword);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
