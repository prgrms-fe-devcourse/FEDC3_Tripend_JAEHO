import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import PostDetail from '../../components/MainSection/PostDetail';
import { postDetailModalState, selectedPostState } from '../../recoil/postStates';
import { PostDetailPageContainer, PostDetailPageWrapper } from './style';

const PostDetailPage = () => {
  const postId = useParams().postId;
  const setSelectedPostId = useSetRecoilState(selectedPostState);
  const setPostDetailModalVisible = useSetRecoilState(postDetailModalState);

  useEffect(() => {
    setPostDetailModalVisible(false);
    setSelectedPostId(postId);
  }, [postId]);

  return (
    <PostDetailPageWrapper>
      <PostDetailPageContainer>
        <PostDetail />
      </PostDetailPageContainer>
    </PostDetailPageWrapper>
  );
};

export default PostDetailPage;
