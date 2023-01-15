import { MyPost, AccompanyButton, AccompaniedButton } from './style';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { createLike, deleteLike } from '../../../apis/like';
import { createAlarm } from '../../../apis/alarm';
import { postStateFamily } from '../../../recoil/postStates';

const Heart = ({ likes, author, postId }) => {
  const userId = localStorage.getItem('id');
  const [{ post }, setPost] = useRecoilState(postStateFamily(postId));

  const [currentLike, setCurrentLike] = useState(likes.find(({ user }) => user === userId));
  const [isLike, setIsLike] = useState(false);

  const onClickHeart = async (e) => {
    e.stopPropagation();

    if (isLike) {
      //좋아요 이미 누른 상태->좋아요 취소
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

      //알림 생성
      await createAlarm('LIKE', data._id, author, data.post);

      setCurrentLike(data);
    }
  };

  useEffect(() => {
    setIsLike(currentLike ? true : false);
  }, [currentLike]);

  return userId === author._id ? (
    <MyPost>내가 작성한 글입니다</MyPost>
  ) : (
    <div onClick={onClickHeart}>
      {isLike ? (
        <AccompaniedButton>동행 신청함</AccompaniedButton>
      ) : (
        <AccompanyButton>동행 신청하기</AccompanyButton>
      )}
    </div>
  );
};

export default Heart;
