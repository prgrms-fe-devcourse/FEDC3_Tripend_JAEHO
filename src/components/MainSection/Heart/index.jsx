import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelState, selectedChannelState } from '../../../recoil/RecoilChannelState';
import { useState, useEffect } from 'react';
import { createLike, deleteLike } from '../../../apis/like';
import { createAlarm } from '../../../apis/alarm';

const Heart = ({ likes, postId, styleProps }) => {
  const userId = localStorage.getItem('id');

  const selectedChannelId = useRecoilValue(selectedChannelState);
  const [postList, setPostList] = useRecoilState(channelState(selectedChannelId));

  const like = likes.find(({ user }) => user === userId);
  const [isLike, setIsLike] = useState(false);

  const onClickHeart = async (e) => {
    e.stopPropagation();
    const newPostList = [...postList.posts];

    if (isLike) {
      //좋아요 이미 누른 상태->좋아요 취소
      const data = await deleteLike(like._id);

      const changedPost = newPostList.map((post) => {
        if (post._id === postId) {
          const likeList = post.likes.filter((like) => like._id !== data._id);

          return { ...post, likes: likeList };
        }
        return post;
      });
      setPostList({ id: postList, posts: changedPost });

      setIsLike(false);
    } else {
      const data = await createLike(postId);
      let author = '';

      const changedPost = newPostList.map((post) => {
        if (post._id === postId) {
          const likeList = post.likes;
          author = post.author._id;

          return { ...post, likes: [...likeList, data] };
        }
        return post;
      });
      setPostList({ id: postList, posts: changedPost });

      setIsLike(true);

      //알림 생성
      const { _id, post } = data;
      await createAlarm('LIKE', _id, author, post);
    }
  };

  useEffect(() => {
    setIsLike(like ? true : false);
  }, [like]);

  return (
    <div onClick={onClickHeart}>
      {isLike ? (
        <FavoriteIcon style={{ color: 'red', ...styleProps }} />
      ) : (
        <FavoriteBorderIcon style={{ color: 'red', ...styleProps }} />
      )}
    </div>
  );
};

export default Heart;
