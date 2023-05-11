import { createAlarm } from '@/apis/alarm';
import { createComment } from '@/apis/comment';
import usePostDetail from '@/hooks/usePostDetail';
import { postStateFamily } from '@/recoil/postStates';
import { Comment } from '@/types/post/post.interfaces';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import CommentCompo from '../Comment';
import { CommentContainer, CommentCount, InputContainer } from './style';
import emojiIcon from '/assets/smile_emoji.png';

interface CommentsProps {
  postId: string;
  comments: Comment[];
}

const Comments = ({ postId, comments }: CommentsProps) => {
  const { getPostData } = usePostDetail();
  const [comment, setComment] = useState('');
  const postDetail = useRecoilValue(postStateFamily(postId));

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (comment.length > 1) {
      const result = await createComment(postId, comment);

      if (result && result.status === 200 && postDetail.post) {
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
          <CommentCompo key={_id} comment={comment} author={author} />
        ))}
      </CommentContainer>
    </>
  );
};

export default Comments;
