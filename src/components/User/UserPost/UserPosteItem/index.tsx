import { memo, useEffect, useState } from 'react';

import { Title } from '@/types/post/post.interfaces';
import {
  ImageItemContainer,
  PostButton,
  PostItemContainer,
  PostTitle,
  PosterButton,
  PosterDeleteButton,
} from './style';

interface UserPosterItemProps {
  id: string;
  title: Title;
  image: string;
  handlePoster(id: string): void;
  handleDeletePoster(id: string): void;
}

const UserPosterItem = memo(function ({
  id,
  title,
  image,
  handlePoster,
  handleDeletePoster,
}: UserPosterItemProps) {
  const [days, setDays] = useState<string[]>([]);

  useEffect(() => {
    setDays(title.date.split('~'));
  }, []);

  return (
    <PostItemContainer key={id}>
      <PostButton>
        <PosterButton onClick={() => handlePoster(id)}>수정</PosterButton>
        <PosterDeleteButton onClick={() => handleDeletePoster(id)}>삭제</PosterDeleteButton>
      </PostButton>
      <PostTitle>
        <p>{title.title}</p>
        <p style={{ marginRight: '10px' }}>
          {days[0]}~ {days[1]}
        </p>
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
