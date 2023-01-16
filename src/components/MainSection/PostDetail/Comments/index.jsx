import useComment from '../../../../hooks/useComment';
import Comment from '../Comment';
import { CommentContainer, CommentCount, InputContainer } from './style';

const Comments = ({ postId, comments }) => {
  const [comment, onChange, onSubmit] = useComment(postId);

  return (
    <>
      <CommentCount>댓글 {comments.length}</CommentCount>
      <InputContainer onSubmit={onSubmit}>
        <img src={require('../../../../../static/images/smile_emoji.png')} />
        <input placeholder="댓글달기..." value={comment} onChange={onChange} />
      </InputContainer>
      <CommentContainer>
        {comments.map(({ _id, comment, author }) => (
          <Comment key={_id} comment={comment} author={author} />
        ))}
      </CommentContainer>
    </>
  );
};

export default Comments;
