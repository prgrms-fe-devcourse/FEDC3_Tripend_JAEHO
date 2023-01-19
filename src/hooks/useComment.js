import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { createAlarm } from '../apis/alarm';
import { createComment } from '../apis/comment';
import { postStateFamily } from '../recoil/postStates';
import usePostDetail from './usePostDetail';

const useComment = (postId) => {
  const { getPostData } = usePostDetail(postId);
  const postDetail = useRecoilValue(postStateFamily(postId));
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

        const { _id, post } = result.data;
        await createAlarm('COMMENT', _id, postDetail.post.author._id, post);

        getPostData();
      }
    }
  };

  return [comment, onChange, onSubmit];
};

export default useComment;
