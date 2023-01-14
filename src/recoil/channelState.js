import { atom, atomFamily, selectorFamily } from 'recoil';
import { getChannelPosts } from '../apis/post';

export const selectedChannelState = atom({
  key: 'selectedChannelState',
  default: '',
});

export const channelState = atomFamily({
  key: 'channelState',
  default: (id) => {
    return {
      key: id,
      posts: null,
    };
  },
});
