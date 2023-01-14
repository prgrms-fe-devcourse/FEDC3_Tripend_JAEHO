import Post from './Post';
import Modal from '../Modal';
import PostDetail from './PostDetail';
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { getChannelPosts, getPostDetail } from '../../apis/post';
import { channelState } from '../../recoil/channelState';
import { postDetailModalState, selectedPostState } from '../../recoil/postStates';
import { useParams } from 'react-router-dom';
import Skeleton from '../common/Skeleton';
import { PostsContainer } from './style';

const Posts = () => {
  const useParamsId = useParams().id;

  const setSelectedPostId = useSetRecoilState(selectedPostState);
  const [postList, setPostList] = useRecoilState(channelState(useParamsId ?? 'all'));
  const [visible, setVisible] = useRecoilState(postDetailModalState);

  const getPostData = async () => {
    if (postList.posts === null) {
      const { data } = await getChannelPosts(useParamsId);

      setPostList({ id: useParamsId, posts: data });
    }
  };

  const getAllPostData = async () => {
    if (postList.posts === null) {
      const { data } = await getPostDetail('');

      data.sort(() => Math.random() - 0.5);
      setPostList({ id: 'all', posts: data });
    }
  };

  const onClickPost = (postId) => {
    setVisible(true);
    setSelectedPostId(postId);
    history.pushState(null, 'modal', `/p/${postId}`);
  };

  const onCloseModal = () => {
    setVisible(false);
    history.back();
  };

  useEffect(() => {
    if (useParamsId) {
      getPostData();
    } else {
      getAllPostData();
    }
  }, [useParamsId]);

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
      </>
    ) : (
      <div>결과가 없음</div>
    );
  };

  return (
    <PostsContainer>
      {postList && postList.posts
        ? renderWithData()
        : Array.from(Array(4), (_, i) => (
            <Skeleton.Card line={4} style={{ margin: '20px' }} key={i} />
          ))}
      <Modal visible={visible} onClose={onCloseModal} width="1100px" height="600px">
        <PostDetail />
      </Modal>
    </PostsContainer>
  );
};

export default Posts;
