import { memo } from 'react';
import { Author, Like } from '@/types/post/post.interfaces';
import AuthorInfo from './AuthorInfo';
import LeftImage from './LeftImage';
import LikeAndComment from './LikeAndComment';
import {
  BottomContainer,
  InfoContainer,
  InfoContainerHeader,
  PostContainer,
  TravelName,
} from './style';
import Tags from './Tags';

interface PostProps {
  id: string;
  titleObject: string;
  image: string;
  author: Author;
  likes: Like[];
  commentLength: number;
  onClickPost: (postId: string) => void;
}

const Post = ({
  id,
  titleObject,
  image,
  author,
  likes,
  commentLength,
  onClickPost,
}: PostProps) => {
  let title, date, gender, personnel;

  if (titleObject.includes('/')) {
    [title, date, gender, personnel] = titleObject.split('/');
  } else if (titleObject.includes('{')) {
    const obj = JSON.parse(titleObject);
    title = obj.title;
    date = obj.date;
    gender = obj.gender;
    personnel = obj.personnel;
  } else {
    title = '';
    date = '';
    gender = '';
    personnel = '';
  }

  return (
    <PostContainer onClick={() => onClickPost(id)}>
      <LeftImage src={image} width="280px" height="180px" />
      <InfoContainer>
        <InfoContainerHeader>
          <TravelName>{title}</TravelName>
        </InfoContainerHeader>
        <Tags date={date} gender={gender} personnel={personnel} />
        <BottomContainer>
          <AuthorInfo image={author?.image} fullName={author?.fullName} />
          <LikeAndComment
            likeLength={likes.length}
            commentLength={commentLength}
          />
        </BottomContainer>
      </InfoContainer>
    </PostContainer>
  );
};

export default memo(
  Post,
  (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
);
