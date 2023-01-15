import {
  PostContainer,
  InfoContainer,
  TravelName,
  BottomContainer,
  InfoContainerHeader,
  LikeAndCommentContainer,
} from './style';
import Tags from './Tags';
import AuthorInfo from './AuthorInfo';
import LeftImage from './LeftImage';
import Heart from '../Heart';
import { memo } from 'react';
import LikeAndComment from './LikeAndComment';

const Post = ({ id, data, image, author, likes, commentLength, onClickPost }) => {
  const isObject = data.includes('{');
  let travel_name;

  if (isObject) {
    travel_name = JSON.parse(data).title;
  } else {
    travel_name = data.split('/')[0];
  }

  return (
    <PostContainer onClick={() => onClickPost(id)}>
      <LeftImage src={image} width={'280px'} height={'180px'} style={{ borderRadius: '16px' }} />
      <InfoContainer>
        <InfoContainerHeader>
          <TravelName>{travel_name}</TravelName>
          {/*<Heart likes={likes} author={author} postId={id} styleProps={{ fontSize: '35px' }} />*/}
        </InfoContainerHeader>
        <Tags data={data} />
        <BottomContainer>
          <AuthorInfo image={author.image} fullName={author.fullName} />
          <LikeAndComment likeLength={likes.length} commentLength={commentLength} />
        </BottomContainer>
      </InfoContainer>
    </PostContainer>
  );
};

export default memo(Post, (prev, next) => JSON.stringify(prev) === JSON.stringify(next));
