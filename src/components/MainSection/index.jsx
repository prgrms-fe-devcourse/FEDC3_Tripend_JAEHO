import Post from './Post';
import Modal from '../Modal';
import PostDetail from './PostDetail';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getChannelPosts, getPostDetail } from '../../apis/post';
import { channelState } from '../../recoil/channelState';
import { postDetailModalState, selectedPostState } from '../../recoil/postStates';
import { useParams } from 'react-router-dom';
import Skeleton from '../common/Skeleton';
import { PostsContainer, NotFoundResultContainer } from './style';
import { getChannels } from '../../apis/post';

const Posts = () => {
  const useParamsId = useParams().id;

  const setSelectedPostId = useSetRecoilState(selectedPostState);
  const [postList, setPostList] = useRecoilState(channelState(useParamsId ?? 'all'));
  const [visible, setVisible] = useRecoilState(postDetailModalState);

  const [selectedChannelName, setSelectedChannelName] = useState('');

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //채널 이름 가져오기 위한 함수
  const getChannelName = async (clickedId) => {
    const { data } = await getChannels();
    return data.filter((channels) => channels._id === clickedId)[0]?.name;
  };

  const setChannelName = async () => {
    const data = await getChannelName(useParamsId);
    setSelectedChannelName(data);
  };
  setChannelName();

  const getPostData = async () => {
    const { data } = await getChannelPosts(useParamsId);
    await sleep(300);
    setPostList({ id: useParamsId, posts: data });
  };

  const getAllPostData = async () => {
    const { data } = await getPostDetail('');

    data.sort(() => Math.random() - 0.5);
    setPostList({ id: 'all', posts: data });
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
                data={post.title}
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
      <NotFoundResultContainer>
        <strong>{selectedChannelName}</strong>의 글 목록이 아직 존재하지 않습니다. <br />
        <br />
        동행을 구하고 싶다면 포스트를 생성해보세요 :)
      </NotFoundResultContainer>
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
