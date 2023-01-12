import { baseRequest } from './core';

export const searchAll = async (keyword) => {
  try {
    const data = await baseRequest.get(`/search/all/${keyword}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
