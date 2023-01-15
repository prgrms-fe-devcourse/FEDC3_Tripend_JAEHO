import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedPostState, postStateFamily } from '../../../recoil/postStates';
import { getPostDetail } from '../../../apis/post';
import AuthorInfo from '../Post/AuthorInfo';
import LeftImage from '../Post/LeftImage';
import Tags from '../Post/Tags';
import Heart from '../Heart';
import Comments from './Comments';
import Skeleton from '../../common/Skeleton';
import {
  PostDetailContainer,
  RightContainer,
  RightContainerContent,
  Title,
  BottomContainer,
} from './style';

const PostDetail = () => {
  const postId = useRecoilValue(selectedPostState);
  const [{ post, content, titleData }, setPostDetail] = useRecoilState(postStateFamily(postId));

  const getPostData = async () => {
    if (post === null) {
      const { data } = await getPostDetail(postId);
      const { title } = data;
      let content;
      let titleData;

      if (title.includes('{')) {
        content = JSON.parse(title).content;
        titleData = JSON.parse(title).title;
      } else {
        titleData = title.split('/')[0];
      }

      setPostDetail({ key: postId, post: data, content, titleData });
    }
  };

  useEffect(() => {
    if (postId) {
      getPostData();
    }
  }, [postId]);

  return post ? (
    <PostDetailContainer>
      <LeftImage src={post.image} width={'50%'} height={'100%'} style={{ borderRadius: '16px' }} />
      <RightContainer>
        <RightContainerContent alignItem="flex-start" style={{ paddingBottom: '60px' }}>
          <Title>{titleData}</Title>
        </RightContainerContent>

        <RightContainerContent
          flexDirection="row"
          justifyContent="space-between"
          alignItem="flex-end"
          style={{ paddingBottom: '20px' }}
        >
          <AuthorInfo image={post.author.image} fullName={post.author.fullName} />
          <div>벨기에, 브리쉘</div>
        </RightContainerContent>
        <RightContainerContent flexDirection="row" justifyContent="space-between">
          <Tags data={post.title} alignItem="flex-end" />
          <RightContainerContent flexDirection="row">
            <Heart
              likes={post.likes}
              author={post.author}
              postId={post._id}
              styleProps={{ fontSize: '25px' }}
            />
          </RightContainerContent>
        </RightContainerContent>
        <div>{content}</div>
        <BottomContainer alignItem="flex-start">
          <Comments postId={postId} comments={post.comments} />
        </BottomContainer>
      </RightContainer>
    </PostDetailContainer>
  ) : (
    <Skeleton.Detail line={4} />
  );
};

export default PostDetail;
