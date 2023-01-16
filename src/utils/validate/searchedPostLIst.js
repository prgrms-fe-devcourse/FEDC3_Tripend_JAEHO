export const filterdPost = (list) => {
  return list
    .filter((item) => item.title)
    .map((item) => {
      item.title = JSON.parse(item.title).title;
      return item;
    })
    .splice(0, 10);
};
