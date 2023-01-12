import * as style from './style';
import Post from './Post';
import Modal from '../Modal';
import PostDetail from './PostDetail';
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { getChannelPosts, getPostDetail } from '../../apis/post';
import { channelState, selectedChannelState } from '../../recoil/RecoilChannelState';
import { selectedPostState } from '../../recoil/RecoilPostStates';
import Skeleton from '../common/Skeleton';

const Posts = () => {
  const selectedChannelId = useRecoilValue(selectedChannelState);
  const setSelectedPostId = useSetRecoilState(selectedPostState);
  const [postList, setPostList] = useRecoilState(channelState(selectedChannelId ?? 'all'));
  const [visible, setVisible] = useState(false);

  const getPostData = async () => {
    if (postList.posts) {
      receivedData = postList.posts;
    } else {
      const { data } = await getChannelPosts(selectedChannelId);
      receivedData = data;

      setPostList({ id: selectedChannelId, posts: data });
    }
  };

  const getAllPostData = async () => {
    const { data } = await getPostDetail('');

    data.sort(() => Math.random() - 0.5);
    setPostList({ id: 'all', posts: data });
  };

  const onClickPost = (postId) => {
    setVisible(true);
    setSelectedPostId(postId);
  };

  useEffect(() => {
    if (selectedChannelId) {
      getPostData();
    } else {
      getAllPostData();
    }
  }, [selectedChannelId]);

  const renderWithData = () => {
    return postList.posts.length > 0 ? (
      <>
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
                onClickPost={onClickPost}
              />
            );
          })}
        </div>
        <Modal visible={visible} onClose={() => setVisible(false)} width="1100px" height="600px">
          <PostDetail />
        </Modal>
      </>
    ) : (
      <div>결과가 없음</div>
    );
  };

  return (
    <style.PostsContainer>
      {postList && postList.posts
        ? renderWithData()
        : Array.from(Array(4), (_, i) => (
            <Skeleton.Card line={4} style={{ margin: '20px' }} key={i} />
          ))}
    </style.PostsContainer>
  );
};

export default Posts;
