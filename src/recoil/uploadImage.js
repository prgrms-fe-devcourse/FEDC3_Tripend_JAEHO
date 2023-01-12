import { atom } from 'recoil';

export const uploadImageState = atom({
  key: 'image',
  default: null,
});

export const formatDataState = atom({
  key: 'formatImage',
  default: null,
});
