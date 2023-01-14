import { atomFamily, atom } from 'recoil';

export const selectedPostState = atom({
  key: 'selectedPostState',
  default: '',
});

export const postDetailModalState = atom({
  key: 'postDetailModalState',
  default: false,
});

export const postStateFamily = atomFamily({
  key: 'postDetailState',
  default: (id) => {
    return {
      key: id,
      post: null,
    };
  },
});
