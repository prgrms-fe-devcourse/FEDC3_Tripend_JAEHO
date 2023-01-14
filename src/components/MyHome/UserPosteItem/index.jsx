import {
  ImageItemContainer,
  PostButton,
  PostItemContainer,
  PostTitle,
} from '../../../pages/MyPosterPage/style';
import { memo } from 'react';
import styled from '@emotion/styled';

const UserPosterItem = memo(function ({ id, title, image, handlePoster, handleDeletePoster }) {
  return (
    <PostItemContainer key={id}>
      <PostButton>
        <PosTerButton onClick={() => handlePoster(id)}>수정</PosTerButton>

        <PosterDeleteButton onClick={() => handleDeletePoster(id)}>삭제</PosterDeleteButton>
      </PostButton>
      <PostTitle>
        <p>{title.split('/')[0]}</p>
        <p style={{ marginRight: '50px' }}>{title.split('/')[1]}</p>
      </PostTitle>
      <ImageItemContainer>
        <img
          src={image ? image : 'https://via.placeholder.com/280x180'}
          alt="post image"
          width="100%"
          height="100%"
          style={{ borderRadius: '16px' }}
        />
      </ImageItemContainer>
    </PostItemContainer>
  );
});

export default UserPosterItem;

const PosTerButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #55d4a9;
  background-color: #ffffff;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
`;

const PosterDeleteButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #8dd3bb;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #55d4a9;
  }
`;
