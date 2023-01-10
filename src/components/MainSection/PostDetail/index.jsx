import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedPostState, postStateFamily } from '../../../recoil/RecoilPostStates';
import { getPostDetail } from '../../../apis/post';
import AuthorInfo from '../Post/AuthorInfo';
import LeftImage from '../Post/LeftImage';
import Tags from '../Post/Tags';
import Heart from '../Post/Heart';
import Comment from './Comment';
import {
  PostDetailContainer,
  RightContainer,
  RightContainerContent,
  AccompanyButton,
  BottomContainer,
  CommentCount,
  InputContainer,
} from './style';

const PostDetail = () => {
  const postId = useRecoilValue(selectedPostState);
  const [{ post }, setPostDetail] = useRecoilState(postStateFamily(postId));

  const getPostData = async () => {
    if (post === null) {
      const { data } = await getPostDetail(postId);
      setPostDetail({ key: postId, post: data });
    }
  };

  useEffect(() => {
    if (postId) {
      getPostData();
    }
  }, [postId]);

  return (
    <PostDetailContainer>
      {post ? (
        <>
          <LeftImage
            src={post.image}
            width={'50%'}
            height={'100%'}
            style={{ borderRadius: '16px' }}
          />
          <RightContainer>
            <RightContainerContent
              flexDirection="row"
              justifyContent="space-between"
              alignItem="flex-end"
              style={{ paddingBottom: '60px' }}
            >
              <AuthorInfo image={post.author.image} fullName={post.author.fullName} />
              <div>벨기에, 브리쉘</div>
            </RightContainerContent>
            <RightContainerContent flexDirection="row" justifyContent="space-between">
              <Tags title={post.title} alignItem="flex-end" />
              <RightContainerContent flexDirection="row">
                <Heart
                  likes={post.likes}
                  userId={'63b92f37230951110b843cbd'}
                  styleProps={{ fontSize: '25px' }}
                />
                <AccompanyButton>동행 신청하기</AccompanyButton>
              </RightContainerContent>
            </RightContainerContent>
            <BottomContainer alignItem="flex-start">
              <CommentCount>댓글 {post.comments.length}</CommentCount>
              <InputContainer>
                <img src={require('../../../../static/images/smile_emoji.png')} />
                <input placeholder="댓글달기..." />
              </InputContainer>
              {post.comments.map(({ _id, comment, author }) => (
                <Comment key={_id} comment={comment} author={author} />
              ))}
            </BottomContainer>
          </RightContainer>
        </>
      ) : (
        <div>로딩...</div>
      )}
    </PostDetailContainer>
  );
};

export default PostDetail;
