import { useState } from 'react';
import Comment from '../Comment';
import { useRecoilValue, useRecoilState } from 'recoil';
import { postStateFamily } from '../../../../recoil/RecoilPostStates';
import { channelState, selectedChannelState } from '../../../../recoil/RecoilChannelState';
import { createComment } from '../../../../apis/comment';
import { getChannelPosts, getPostDetail } from '../../../../apis/post';
import { CommentCount, InputContainer, CommentContainer } from './style';
import { createAlarm } from '../../../../apis/alarm';

const Comments = ({ postId, comments }) => {
  const selectedChannelId = useRecoilValue(selectedChannelState);
  const [postDetail, setPostDetail] = useRecoilState(postStateFamily(postId));
  const [postList, setPostList] = useRecoilState(channelState(selectedChannelId ?? 'all'));

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

        //알림보내기
        const { _id, post } = result.data;
        await createAlarm('COMMENT', _id, postDetail.post.author._id, post);

        //PostDetail atom 업데이트
        const { data } = await getPostDetail(postId);
        setPostDetail({ key: postId, post: data });

        //PostList atom 업데이트
        const newResult = selectedChannelId
          ? await getChannelPosts(selectedChannelId)
          : await getPostDetail('');
        setPostList({ id: selectedChannelId, posts: newResult.data });
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
