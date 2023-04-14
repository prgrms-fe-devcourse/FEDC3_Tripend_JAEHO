import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { postStateFamily } from '../../../../recoil/postStates';
import usePostDetail from '../../../../hooks/usePostDetail';
import Comment from '../Comment';
import { CommentContainer, CommentCount, InputContainer } from './style';
import emojiIcon from '/assets/smile_emoji.png';

const Comments = ({ postId, comments }) => {
  const { getPostData } = usePostDetail(postId);
  const [comment, setComment] = useState('');
  const postDetail = useRecoilValue(postStateFamily(postId));

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (comment.length > 1) {
      const result = await createComment(postId, comment);

      if (result.status === 200) {
        setComment('');

        const { _id, post } = result.data;
        await createAlarm('COMMENT', _id, postDetail.post.author._id, post);

        getPostData();
      }
    }
  };

  return (
    <>
      <CommentCount>댓글 {comments.length}</CommentCount>
      <InputContainer onSubmit={onSubmit}>
        <img src={emojiIcon} alt="emoji-icon" />
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
