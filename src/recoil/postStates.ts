import { atomFamily, atom } from 'recoil';

export const selectedPostState = atom({
  key: 'selectedPostState',
  default: '',
});

export const postDetailModalState = atom({
  key: 'postDetailModalState',
  default: false,
});

interface Like {
  createdAt: string;
  post: string;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
}

interface Post {
  likes: Like[];
}

interface postStateFamilyType {
  key: string;
  post: Post | null;
}

export const postStateFamily = atomFamily<postStateFamilyType, string>({
  key: 'postDetailState',
  default: (id) => {
    return {
      key: id,
      post: null,
    };
  },
});
