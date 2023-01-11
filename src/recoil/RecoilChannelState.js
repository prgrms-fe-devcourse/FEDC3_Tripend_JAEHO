import { atom, atomFamily } from 'recoil';

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
