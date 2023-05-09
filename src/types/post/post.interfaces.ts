import { Channel } from '../channel/channel.interface';

export interface Like {
  post: string;
  user: string;
  _id: string;
}

export interface Post {
  likes: Like[];
  author: Author;
  channel: Channel;
  comments: Comment[];
  content: string;
  country: string;
  createdAt: string;
  date: string;
  gender: string;
  image: string;
  imagePublicId: string;
  title: string;
  personnel: string;
  _id: string;
}

export interface Author {
  image: string;
  fullName: string;
  _id: string;
}

export interface Comment {
  author: Author;
  comment: string;
  createdAt: string;
  post: string;
  updatedAt: string;
  __v: number;
  _id: string;
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
