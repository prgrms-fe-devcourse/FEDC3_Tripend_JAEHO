import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { getUser } from '../../apis/auth';
import { getChannelPosts } from '../../apis/post';
import { postsState, selectedChannelState } from '../../utils/channelState';
import Post from './Post';
import * as style from './style';

const Posts = () => {
  const selectedChannelId = useRecoilValue(selectedChannelState);
  const [postList, setPostList] = useRecoilState(postsState(selectedChannelId));
  const [userId, setUserId] = useState('');

  const getPostData = async () => {
    const { data } = await getChannelPosts(selectedChannelId);
    
    data.sort(() => Math.random() - 0.5);
    setPostList(data);
  };

  const getUserData = async () => {
    const { data } = await getUser();

    setUserId(data._id);
  };

  useEffect(() => {
    if (selectedChannelId) {
      getPostData();
      getUserData();
    }
  }, [selectedChannelId]);

  return (
    <style.PostsContainer>
      {selectedChannelId ? (
        postList.length > 0 ? (
          <>
            {postList.map((post) => {
              return (
                <Post
                  key={post._id}
                  title={post.title}
                  image={post.image}
                  author={post.author}
                  likes={post.likes}
                  commentLength={post.comments.length}
                  userId={userId}
                />
              );
            })}
          </>
        ) : (
          <div>결과가 없음</div>
        )
      ) : (
        <div>선택된 id가 없음</div>
      )}
    </style.PostsContainer>
  );
};

export default Posts;
