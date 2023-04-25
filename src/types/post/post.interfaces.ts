export interface PostData {
  author: string;
  channel: string;
  comments: string[];
  createdAt: string;
  image: string;
  imagePublicId: string;
  likes: string[];
  title: Title;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface Title {
  //아마 공용일듯 나중에 밖으로 빼는 걸로
  content: string;
  country: string;
  date: string;
  gender: '남자만' | '여자만' | '남여 무관';
  personnel: string;
  title: string;
}
