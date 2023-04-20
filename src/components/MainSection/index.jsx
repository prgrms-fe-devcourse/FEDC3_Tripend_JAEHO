import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedPostState } from '../../recoil/postStates';
import {
  selectedChannelState,
  selectedChannelNameState,
  channelState,
} from '../../recoil/channelState';
import { postDetailModalState } from '../../recoil/postStates';
import Skeleton from '../Common/Skeleton';
import Modal from '../Modal';
import Post from './Post';
import PostDetail from './PostDetail';
import { getAllPosts, getChannelPosts, getChannels } from '../../apis/post';
import { NotFoundResultContainer, PostsContainer } from './style';

const Posts = () => {
  const useParamsId = useParams().id;

  const setSelectedPostId = useSetRecoilState(selectedPostState);
  const [postList, setPostList] = useRecoilState(channelState(useParamsId ?? 'all'));
  const [visible, setVisible] = useRecoilState(postDetailModalState);
  const [selectedChannelName, setSelectedChannelName] = useRecoilState(selectedChannelNameState);
  const setSelectedChannelId = useSetRecoilState(selectedChannelState);

  useEffect(() => {
    if (useParamsId) {
      getPostData();
      setChannelName(useParamsId);
    } else {
      getAllPostData();
    }
  }, [useParamsId]);

  const getChannelName = async (clickedId) => {
    const { data } = await getChannels();
    return data.filter((channels) => channels._id === clickedId)[0]?.name;
  };

  const setChannelName = async (useParamsId) => {
    const data = await getChannelName(useParamsId);
    setSelectedChannelName(data);
    setSelectedChannelId(useParamsId);
  };

  const getPostData = async () => {
    const { data } = await getChannelPosts(useParamsId);
    setPostList({ id: useParamsId, posts: data });
  };

  const getAllPostData = async () => {
    const { data } = await getAllPosts();
    data.sort(() => Math.random() - 0.5);
    setPostList({ id: 'all', posts: data });
    setSelectedChannelName('');
    setSelectedChannelId('');
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

  const renderWithData = () => {
    return postList.posts.length > 0 ? (
      <>
        <div className="postContainer">
          {postList.posts.map((post) => {
            return (
              <Post
                key={post._id}
                id={post._id}
                titleObject={post.title}
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
        동행을 구하고 싶다면 포스트를 생성해보세요.
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
