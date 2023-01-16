import { memo } from 'react';
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

const Post = ({ id, titleObject, image, author, likes, commentLength, onClickPost }) => {
  const { title, date, gender, personnel } = JSON.parse(titleObject);

  return (
    <PostContainer onClick={() => onClickPost(id)}>
      <LeftImage src={image} width={'280px'} height={'180px'} style={{ borderRadius: '16px' }} />
      <InfoContainer>
        <InfoContainerHeader>
          <TravelName>{title}</TravelName>
        </InfoContainerHeader>
        <Tags date={date} gender={gender} personnel={personnel} />
        <BottomContainer>
          <AuthorInfo image={author?.image} fullName={author?.fullName} />
          <LikeAndComment likeLength={likes.length} commentLength={commentLength} />
        </BottomContainer>
      </InfoContainer>
    </PostContainer>
  );
};

export default memo(Post, (prev, next) => JSON.stringify(prev) === JSON.stringify(next));
