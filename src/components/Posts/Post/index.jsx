import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  PostContainer,
  ImageContainer,
  Image,
  InfoContainer,
  TravelName,
  TagContainer,
  Tag,
  BottomContainer,
  InfoContainerHeader,
  AuthorInfoContainer,
  LikeAndCommentContainer,
  UserImage,
} from './style';

const Post = ({ title, image, author, likes, commentLength }) => {
  const { fullName, username } = author;
  const [_, author_age, author_gender] = fullName.split('/');
  const [travel_name, travel_date, travel_personnel, travel_gender] = title.split('/');
  const likesUserList = likes.filter(({ user }) => user === '63b92f37230951110b843cbd').length > 0;

  return (
    <PostContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <InfoContainer>
        <InfoContainerHeader>
          <TravelName>{travel_name}</TravelName>
          <FavoriteIcon style={{ color: likesUserList ? 'red' : 'gray', fontSize: '35px' }} />
        </InfoContainerHeader>
        <TagContainer>
          <Tag>{travel_date}</Tag>
          <Tag>{travel_gender}</Tag>
          <Tag>{travel_personnel}인</Tag>
        </TagContainer>
        <BottomContainer>
          <AuthorInfoContainer>
            {author.image ? <UserImage src={author.image} /> : <div>프로필없음</div>}
            <div>
              <div>{username}</div>
              <div>
                {author_age} / {author_gender}
              </div>
            </div>
          </AuthorInfoContainer>
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
