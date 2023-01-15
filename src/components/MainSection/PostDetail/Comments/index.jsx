import { useState } from 'react';
import Comment from '../Comment';
import { useRecoilState } from 'recoil';
import { postStateFamily } from '../../../../recoil/postStates';
import { createComment } from '../../../../apis/comment';
import { getChannelPosts, getPostDetail } from '../../../../apis/post';
import { CommentCount, InputContainer, CommentContainer } from './style';
import { createAlarm } from '../../../../apis/alarm';

const Comments = ({ postId, comments }) => {
  const [postDetail, setPostDetail] = useRecoilState(postStateFamily(postId));
  const [comment, setComment] = useState('');

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (comment.length > 1) {
      const result = await createComment(postId, comment);

      if (result.status === 200) {
        setComment('');

        //알림보내기
        const { _id, post } = result.data;
        await createAlarm('COMMENT', _id, postDetail.post.author._id, post);

        //PostDetail atom 업데이트
        const { data } = await getPostDetail(postId);
        setPostDetail({ key: postId, post: data });
      }
    }
  };

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
