import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getAllPosts, getChannelPosts, getChannels } from '../apis/post';
import {
  channelState,
  selectedChannelNameState,
  selectedChannelState,
} from '../recoil/channelState';
import { postDetailModalState, selectedPostState } from '../recoil/postStates';
import { sleep } from '../utils/sleep';

const useMainSection = () => {
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
    await sleep(300);
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

  return { postList, visible, selectedChannelName, onClickPost, onCloseModal };
};

export default useMainSection;
