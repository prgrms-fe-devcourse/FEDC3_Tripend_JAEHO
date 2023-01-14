import {
  ImageItemContainer,
  PostButton,
  PostItemContainer,
  PostTitle,
} from '../../../pages/MyPosterPage/style';
import { memo } from 'react';
import { PosterButton, PosterDeleteButton } from './style';

const UserPosterItem = memo(function ({ id, title, image, handlePoster, handleDeletePoster }) {
  return (
    <PostItemContainer key={id}>
      <PostButton>
        <PosterButton onClick={() => handlePoster(id)}>수정</PosterButton>

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
