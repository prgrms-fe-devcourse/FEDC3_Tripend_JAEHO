import useMainSection from '../../hooks/useMainSection';
import Skeleton from '../Common/Skeleton';
import Modal from '../Modal';
import Post from './Post';
import PostDetail from './PostDetail';
import { NotFoundResultContainer, PostsContainer } from './style';

const Posts = () => {
  const { postList, visible, selectedChannelName, onClickPost, onCloseModal } = useMainSection();

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
