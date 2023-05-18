import { atom } from 'recoil';

export const updateTargetDataState = atom({
  key: 'userLoginData',
  default: {
    data: {
      author: {
        fullName: '',
      },
    },
  },
});

export const uploadImageState = atom<File | null>({
  key: 'image',
  default: null,
});

export const myHomeModalState = atom({
  key: 'myHomeModal',
  default: false,
});
