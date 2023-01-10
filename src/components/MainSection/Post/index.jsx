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
import Heart from './Heart';

const Post = ({ id, title, image, author, likes, commentLength, userId, onClickPost }) => {
  const [travel_name, travel_date, travel_personnel, travel_gender] = title.split('/');

  return (
    <PostContainer onClick={() => onClickPost(id)}>
      <LeftImage src={image} size="100%" style={{ borderRadius: '16px' }} />
      <InfoContainer>
        <InfoContainerHeader>
          <TravelName>{travel_name}</TravelName>
          <Heart likes={likes} userId={userId} styleProps={{ fontSize: '35px' }} />
        </InfoContainerHeader>
        <Tags date={travel_date} personnel={travel_personnel} gender={travel_gender} />
        <BottomContainer>
          <AuthorInfo image={author.image} fullName={author.fullName} />
          <LikeAndCommentContainer>
            <div>좋아요 {likes.length}</div>
            <div>댓글 {commentLength}</div>
          </LikeAndCommentContainer>
        </BottomContainer>
      </InfoContainer>
    </PostContainer>
  );
};

export default Post;
