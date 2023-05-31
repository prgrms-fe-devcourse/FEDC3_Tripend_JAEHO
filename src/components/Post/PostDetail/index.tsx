import Skeleton from '@/components/Common/Skeleton';
import Like from '@/components/Post/Like';
import AuthorInfo from '@/components/Post/PostCard/AuthorInfo';
import LeftImage from '@/components/Post/PostCard/LeftImage';
import Tags from '@/components/Post/PostCard/Tags';
import usePostDetail from '@/hooks/usePostDetail';
import Comments from './Comments';
import {
  BottomContainer,
  Content,
  Country,
  PostDetailContainer,
  RightContainer,
  RightContainerContent,
  Title,
} from './style';
import locationIcon from '/assets/Location.png';

const PostDetail = () => {
  const userId = localStorage.getItem('id');
  const { post } = usePostDetail();
  const likeId = post?.likes.find(
    ({ user }: { user: string }) => user === userId
  )?._id;

  return post ? (
    <PostDetailContainer>
      <LeftImage src={post.image} width="50%" height="100%" />
      <RightContainer>
        <RightContainerContent
          alignItem="flex-start"
          style={{ paddingBottom: '60px' }}
        >
          <Title>{post.title}</Title>
        </RightContainerContent>

        <RightContainerContent
          flexDirection="row"
          justifyContent="space-between"
          alignItem="flex-end"
          style={{ paddingBottom: '20px' }}
        >
          <AuthorInfo
            image={post.author.image}
            fullName={post.author.fullName}
          />
          <Country>
            <img src={locationIcon} alt="location-icon" />
            <span>{post.country}</span>
          </Country>
        </RightContainerContent>
        <RightContainerContent
          flexDirection="row"
          justifyContent="space-between"
        >
          <Tags
            date={post.date}
            gender={post.gender}
            personnel={post.personnel}
            alignItem="flex-end"
          />
          <RightContainerContent flexDirection="row">
            <Like
              likeId={likeId}
              authorId={post.author._id}
              postId={post._id}
            />
          </RightContainerContent>
        </RightContainerContent>
        <Content>{post.content}</Content>
        <BottomContainer>
          <Comments postId={post._id} comments={post.comments} />
        </BottomContainer>
      </RightContainer>
    </PostDetailContainer>
  ) : (
    <Skeleton.Detail line={4} />
  );
};

export default PostDetail;
