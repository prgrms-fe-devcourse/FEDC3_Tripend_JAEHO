import { extractName } from './userList';

export const filterdPost = (list) => {
  return list
    .filter((item) => item.title)
    .map((item) => {
      item.title = extractName.exec(item.title)[0];
      return item;
    })
    .splice(0, 10);
};
