import { atomFamily, selector } from 'recoil';

export const postStateFamily = atomFamily({
  key: 'postDetailState',
  default: {
    likes: [],
    comments: [],
    _id: '',
    image: '',
    imagePublicId: '',
    title: '',
    channel: {},
    author: {},
    createdAt: '',
    updatedAt: '',
  },
});
