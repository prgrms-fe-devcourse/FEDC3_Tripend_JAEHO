import { atom } from 'recoil';

export const uploadImageState = atom({
  key: 'image',
  default: null,
});

export const formatDataState = atom({
  key: 'formatImage',
  default: null,
});

export const userLoginDateState = atom({
  key: 'userLoginDate',
  default: {},
});

export const userListState = atom({
  key: 'userList',
  default: [],
});

export const myHomeModalState = atom({
  key: 'myHomeModal',
  default: false,
});

export const myChannelState = atom({
  key: 'myChannel',
  default: '',
});

export const myChannelIdState = atom({
  key: 'myChannelId',
  default: '',
});
