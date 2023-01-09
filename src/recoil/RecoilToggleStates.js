import { atomFamily } from 'recoil';

export const toggleStateFamily = atomFamily({
  key: 'toggleState',
  default: false,
});
