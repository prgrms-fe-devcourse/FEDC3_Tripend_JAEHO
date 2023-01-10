import { atom, atomFamily } from 'recoil';
import { getChannelPosts } from '../apis/post';

export const selectedChannelState = atom({
  key: 'selectedChannelState',
  default: '',
});

export const postsState = atomFamily({
  key: 'postsState',
  default: (id) => {
    return {
      id,
      posts: [],
    };
  },
});
