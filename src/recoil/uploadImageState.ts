import { atom } from 'recoil';

export const updateTargetDataState = atom({
  key: 'userLoginDate',
  default: {},
});

export const uploadImageState = atom({
  key: 'image',
  default: null,
});

export const myHomeModalState = atom({
  key: 'myHomeModal',
  default: false,
});
