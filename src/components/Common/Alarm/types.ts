export interface Alarm extends Author {
  _id?: string;
  post?: string;
  author?: Author;
  comment?: string;
}

interface Author {
  fullName?: string;
  image?: string;
}
