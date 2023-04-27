export interface Like {
  post: string;
  user: string;
  _id: string;
}

export interface Post {
  likes: Like[];
}

export interface Author {
  image: string;
  fullName: string;
}

export interface PostData {
  author: string;
  channel: string;
  comments: string[];
  createdAt: string;
  image: string;
  imagePublicId: string;
  likes: string[];
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface Title {
  content: string;
  country: string;
  date: string;
  gender: '남자만' | '여자만' | '남여 무관';
  personnel: string;
  title: string;
}
