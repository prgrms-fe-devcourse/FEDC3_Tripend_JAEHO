import { POSTURL } from '../utils/constant/post';
import { baseRequest } from './core';
export const searchAll = async (keyword) => {
  try {
    const data = await baseRequest.get(POSTURL.SEARCH_POST + keyword);
    return data;
  } catch (error) {
    console.error(error);
  }
};
