import { useState } from 'react';
import { createComment } from '../../../../apis/comment';
import Comment from '../Comment';
import { CommentCount, InputContainer, CommentContainer } from './style';

const Comments = ({ postId, comments }) => {
  const [comment, setComment] = useState('');
  const [newComments, setComments] = useState(comments);

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 1) {
      const result = await createComment(postId, comment);

      if (result.status === 200) {
        setComment('');
        setComments([...newComments, result.data]);
      }
    }
  };

  return (
    <>
      <CommentCount>댓글 {newComments.length}</CommentCount>
      <InputContainer onSubmit={onSubmit}>
        <img src={require('../../../../../static/images/smile_emoji.png')} />
        <input placeholder="댓글달기..." value={comment} onChange={onChange} />
      </InputContainer>
      <CommentContainer>
        {newComments.map(({ _id, comment, author }) => (
          <Comment key={_id} comment={comment} author={author} />
        ))}
      </CommentContainer>
    </>
  );
};

export default Comments;
