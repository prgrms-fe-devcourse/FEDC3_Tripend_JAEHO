import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { getChannelPosts } from '../../apis/post';
import { postsState, selectedChannelState } from '../../utils/channelState';
import Post from './Post';
import * as style from './style';

const Posts = () => {
  const selectedChannelId = useRecoilValue(selectedChannelState);
  const [postList, setPostList] = useRecoilState(postsState(selectedChannelId));

  const getPostData = async () => {
    const response = await getChannelPosts(selectedChannelId);
    console.log(response);
    setPostList({
      posts: response,
    });
    console.log(postList);
  };

  useEffect(() => {
    if (selectedChannelId) {
      getPostData();
    }
  }, [selectedChannelId]);

  return (
    <style.PostsContainer>
      {selectedChannelId ? (
        postList.posts.length > 0 ? (
          <>
            {postList.posts.map((post) => {
              return (
                <Post
                  key={post._id}
                  title={post.title}
                  image={post.image}
                  author={post.author}
                  likes={post.likes}
                  commentLength={post.comments.length}
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
