import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { postStateFamily } from '../../../recoil/postStates';
import { createAlarm } from '../../../apis/alarm';
import { createLike, deleteLike } from '../../../apis/like';
import { AccompanyButton, MyPost } from './style';

const Heart = ({ likes, author, postId }) => {
  const userId = localStorage.getItem('id');
  const [isLike, setIsLike] = useState(false);
  const [currentLike, setCurrentLike] = useState(likes.find(({ user }) => user === userId));
  const [{ post }, setPost] = useRecoilState(postStateFamily(postId));

  useEffect(() => {
    setIsLike(currentLike ? true : false);
  }, [currentLike]);

  const onClickLike = async (e) => {
    e.stopPropagation();

    if (isLike) {
      const data = await deleteLike(currentLike._id);
      setIsLike(false);

      if (post) {
        const newPostLike = post.likes.filter((like) => like._id !== data._id);

        setPost({ key: postId, post: { ...post, likes: newPostLike } });
      }
    } else {
      const data = await createLike(postId);
      setIsLike(true);

      if (post) {
        const newPostLike = [...post.likes];

        newPostLike.push(data);
        setPost({ key: postId, post: { ...post, likes: newPostLike } });
      }

      await createAlarm('LIKE', data._id, author._id, data.post);

      setCurrentLike(data);
    }
  };

  return userId === author._id ? (
    <MyPost>내가 작성한 글입니다</MyPost>
  ) : (
    <div onClick={onClickLike}>
      {isLike ? (
        <AccompanyButton clicked={true}>동행 신청함</AccompanyButton>
      ) : (
        <AccompanyButton clicked={false}>동행 신청하기</AccompanyButton>
      )}
    </div>
  );
};

export default Heart;
