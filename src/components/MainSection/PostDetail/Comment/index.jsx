import PersonIcon from '@mui/icons-material/Person';
import { memo } from 'react';
import Image from '../../../Common/Image';
import { AvatarWrapper, CommentContainer, CommentInfo } from './style';

const Comment = ({ comment, author }) => {
  return (
    <CommentContainer>
      <AvatarWrapper>
        {author.image ? (
          <Image
            src={author.image}
            width="100%"
            height="100%"
            style={{ borderRadius: '50%' }}
            lazy={true}
            threshold={0.5}
          />
        ) : (
          <PersonIcon
            style={{
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              fontSize: '35px',
              color: '#adadad',
            }}
          />
        )}
      </AvatarWrapper>
      <CommentInfo>
        <div>{author.fullName}</div>
        <div>{comment}</div>
      </CommentInfo>
    </CommentContainer>
  );
};

export default memo(Comment, (prev, next) => JSON.stringify(prev) === JSON.stringify(next));
