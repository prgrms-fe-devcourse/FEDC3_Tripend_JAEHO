import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getPostDetail } from '@/apis/post';
import { postStateFamily, selectedPostState } from '@/recoil/postStates';

const usePostDetail = () => {
  const postId = useRecoilValue(selectedPostState);
  const [{ post }, setPostDetail] = useRecoilState(postStateFamily(postId));

  useEffect(() => {
    if (postId) {
      getPostData();
    }
  }, [postId]);

  const getPostData = async () => {
    const { data } = await getPostDetail(postId);
    let { title } = data;

    if (title.includes('{')) {
      const newObject = JSON.parse(title);
      setPostDetail({ key: postId, post: { ...data, ...newObject } });
    } else {
      title = title.split('/')[0];
      setPostDetail({ key: postId, post: { ...data, title } });
    }
  };

  return { post, getPostData };
};

export default usePostDetail;
