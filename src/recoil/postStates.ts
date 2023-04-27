import { atomFamily, atom } from 'recoil';
import { Post } from '@/types/post/post.interfaces';

export const selectedPostState = atom({
  key: 'selectedPostState',
  default: '',
});

export const postDetailModalState = atom({
  key: 'postDetailModalState',
  default: false,
});

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
