import { atom } from 'recoil';

export const userLoginState = atom({
  key: 'userAuth',
  default: false,
});

export const userLoginShowState = atom({
  key: 'userLoginShow',
  default: false,
});

export const userLoginButtonShowState = atom({
  key: 'userLoginButtonShow',
  default: true,
});
