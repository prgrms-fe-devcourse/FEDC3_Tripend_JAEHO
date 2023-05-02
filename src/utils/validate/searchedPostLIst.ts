export const filteredPost = (list: any, keyword: string) => {
  //todo: list에 post/postSearch에서 쓰는 type 가져오기
  return list
    .filter((item) => item.title)
    .map((item) => {
      item.country = JSON.parse(item.title).country;
      item.title = JSON.parse(item.title).title;
      return item;
    })
    .filter((item) => item.title.includes(keyword))
    .splice(0, 10);
};
