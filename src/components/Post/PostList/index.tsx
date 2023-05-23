import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedPostState } from '@/recoil/postStates';
import {
  selectedChannelState,
  selectedChannelNameState,
  channelState,
} from '@/recoil/channelState';
import { postDetailModalState } from '@/recoil/postStates';
import Skeleton from '@/components/Common/Skeleton';
import Modal from '@/components/Common/Modal';
import PostCard from '@/components/Post/PostCard';
import PostDetail from '@/components/Post/PostDetail';
import { getAllPosts, getChannelPosts, getChannel } from '@/apis/post';
import { NotFoundResultContainer, PostsContainer } from './style';
import { Channel } from '@/types/channel/channel.interface';
import { Post } from '@/types/post/post.interfaces';

const PostList = () => {
  const useParamsId = useParams().id!;

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

  const getChannelName = async (channelId: string) => {
    const data = await getChannel();
    return data.filter((channel: Channel) => channel._id === channelId)[0]?.name;
  };

  const setChannelName = async (useParamsId: string) => {
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

  const onClickPost = (postId: string) => {
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
          {postList.posts.map((post: Post) => {
            return (
              <PostCard
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
      <Modal visible={visible} onClose={onCloseModal} width={1100} height={600}>
        <PostDetail />
      </Modal>
    </PostsContainer>
  );
};

export default PostList;
