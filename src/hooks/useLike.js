import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postStateFamily } from '../recoil/postStates';
import { getStorage } from '../utils/storage';
import { createLike, deleteLike } from '../apis/like';
import { createAlarm } from '../apis/alarm';

const useLike = (postId, author, likes) => {
  const userId = getStorage('id'); //내 아이디
  const [{ post }, setPost] = useRecoilState(postStateFamily(postId)); //동행 클릭한 post의 정보
  const [currentLike, setCurrentLike] = useState(likes.find(({ user }) => user === userId));
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    setIsLike(currentLike ? true : false);
  }, [currentLike]);

  const onClickLike = async (e) => {
    e.stopPropagation();

    //동행 취소
    if (isLike) {
      const data = await deleteLike(currentLike._id);
      setIsLike(false);

      if (post) {
        const newPostLike = post.likes.filter((like) => like._id !== data._id);

        setPost({ key: postId, post: { ...post, likes: newPostLike } });
      }
    }
    // 동행 신청
    else {
      const data = await createLike(postId);
      setIsLike(true);

      if (post) {
        const newPostLike = [...post.likes];

        newPostLike.push(data);
        setPost({ key: postId, post: { ...post, likes: newPostLike } });
      }

      //알림 생성
      await createAlarm('LIKE', data._id, author._id, data.post);

      setCurrentLike(data);
    }
  };

  return [isLike, onClickLike];
};

export default useLike;
