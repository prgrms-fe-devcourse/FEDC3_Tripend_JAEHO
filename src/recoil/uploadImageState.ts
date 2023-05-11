import { RecoilState, atom } from 'recoil';

export const updateTargetDataState = atom({
  key: 'userLoginDate',
  default: {},
});

export const uploadImageState: RecoilState<null> = atom({
  key: 'image',
  default: null,
});

export const myHomeModalState = atom({
  key: 'myHomeModal',
  default: false,
});
