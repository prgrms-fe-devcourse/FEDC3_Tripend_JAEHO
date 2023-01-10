import { atom, atomFamily } from 'recoil';

export const selectedChannelState = atom({
  key: 'selectedChannelState',
  default: '',
});

export const postsState = atomFamily({
  key: 'postsState',
  default: (id) => {
    return {
      key: id,
      posts: null,
    };
  },
});
