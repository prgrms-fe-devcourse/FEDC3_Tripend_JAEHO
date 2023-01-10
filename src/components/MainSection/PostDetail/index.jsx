import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedPostState, postStateFamily } from '../../../recoil/RecoilPostStates';
import { getPostDetail } from '../../../apis/post';

const PostDetail = () => {
  const postId = useRecoilValue(selectedPostState);
  const [postDetail, setPostDetail] = useRecoilState(postStateFamily(postId));

  const getPostData = async () => {
    if (postDetail.post === null) {
      const { data } = await getPostDetail(postId);
      setPostDetail({ key: postId, post: data });
    }
  };

  useEffect(() => {
    if (postId) {
      getPostData();
    }
  }, [postId]);

  return <div>{postDetail?.post?.title}</div>;
};

export default PostDetail;
