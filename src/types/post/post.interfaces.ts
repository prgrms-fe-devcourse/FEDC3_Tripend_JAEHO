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
