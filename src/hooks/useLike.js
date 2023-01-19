import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { createAlarm } from '../apis/alarm';
import { createLike, deleteLike } from '../apis/like';
import { postStateFamily } from '../recoil/postStates';
import { getStorage } from '../utils/storage';

const useLike = (postId, author, likes) => {
  const userId = getStorage('id');
  const [{ post }, setPost] = useRecoilState(postStateFamily(postId));
  const [currentLike, setCurrentLike] = useState(likes.find(({ user }) => user === userId));
  const [isLike, setIsLike] = useState(false);

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

  return [isLike, onClickLike];
};

export default useLike;
