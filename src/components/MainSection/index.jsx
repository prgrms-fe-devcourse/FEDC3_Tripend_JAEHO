import * as style from './style';
import Post from './Post';
import Modal from '../Modal';
import PostDetail from './PostDetail';
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { getUser } from '../../apis/auth';
import { getChannelPosts } from '../../apis/post';
import { postsState, selectedChannelState } from '../../recoil/RecoilChannelState';
import { selectedPostState } from '../../recoil/RecoilPostStates';

const Posts = () => {
  const selectedChannelId = useRecoilValue(selectedChannelState);
  const setSelectedPostId = useSetRecoilState(selectedPostState);

  const [postList, setPostList] = useRecoilState(postsState(selectedChannelId));
  const [userId, setUserId] = useState('');
  const [visible, setVisible] = useState(false);

  const getPostsData = async () => {
    if (postList.posts === null) {
      const { data } = await getChannelPosts(selectedChannelId);

      data.sort(() => Math.random() - 0.5);
      setPostList({ id: selectedChannelId, posts: data });
    }
  };

  const getUserData = async () => {
    const { data } = await getUser();

    setUserId(data._id);
  };

  const onClickPost = (postId) => {
    setVisible(true);
    setSelectedPostId(postId);
  };

  useEffect(() => {
    if (selectedChannelId) {
      getPostsData();
      getUserData();
    }
  }, [selectedChannelId]);

  return (
    <style.PostsContainer>
      {selectedChannelId ? (
        postList.posts?.length > 0 ? (
          <>
            <div style={{ display: 'flex' }}>
              <div>검색창 자리</div>
              <button>포스트 등록</button>
            </div>
            <div className="postContainer">
              {postList.posts.map((post) => {
                return (
                  <Post
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    image={post.image}
                    author={post.author}
                    likes={post.likes}
                    commentLength={post.comments.length}
                    userId={userId}
                    onClickPost={onClickPost}
                  />
                );
              })}
            </div>
            <Modal visible={visible} onClose={() => setVisible(false)}>
              <PostDetail />
            </Modal>
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
