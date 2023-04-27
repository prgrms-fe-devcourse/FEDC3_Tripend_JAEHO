import { getUser } from '@/apis/auth';
import { getMyPostDetail, removePost } from '@/apis/post';
import Modal from '@/components/Common/Modal';
import MyhomeModal from '@/components/Common/Modal/MyhomeModal';
import {
  myHomeModalState,
  updateTargetDataState,
  uploadImageState,
} from '@/recoil/uploadImageState';
import { ERROR_MESSAGE_SIGNIN, USER } from '@/utils/constants/auth';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import swal from 'sweetalert';
import Pagination from './Pagination';
import UserPosterItem from './UserPosteItem';
import {
  HeaderTitle,
  ModalTitle,
  ModalTitleButton,
  ModalTitleWrapper,
  PostsWrapper,
  UserPostContainer,
} from './style';
import { PostData, Title } from '@/types/post/post.interfaces';

const UserPost = () => {
  const { isLoading } = useQuery(['musicDetail'], getUser, {
    onSuccess: ({ data }) => {
      setPosts(data?.posts);
    },
  });

  const [posts, setPosts] = useState<PostData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postId, setPostId] = useState('');

  const setPostDetail = useSetRecoilState(updateTargetDataState);
  const [imageValue, setImageValue] = useRecoilState(uploadImageState);

  const [modalVisible, setModalVisible] = useRecoilState(myHomeModalState);

  const handlePoster = async (id: string) => {
    const getPostDetail = await getMyPostDetail(id);

    setModalVisible(true);
    setPostId(id);
    setPostDetail(getPostDetail);
  };

  const handlerModalClose = () => {
    setModalVisible(false);
    setImageValue(null);
  };

  const handleDeletePoster = async (id: string) => {
    swal({
      title: USER.DELETE_POSTER,
      text: USER.DELETE,
      icon: ERROR_MESSAGE_SIGNIN.DELETE_POSTER_WARNING,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await removePost(id);

        const filteredData = posts.filter((post) => post._id !== id);

        setPosts(filteredData);
      }
    });
  };

  const postPerPage = 3;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoading) return <div>로딩중입니다...</div>;

  return (
    <UserPostContainer>
      <HeaderTitle>작성한 글</HeaderTitle>
      <PostsWrapper>
        {currentPosts.length ? (
          currentPosts.map(({ _id, title, image }) => {
            return (
              <UserPosterItem
                key={_id}
                id={_id}
                title={JSON.parse(title)}
                image={image}
                handlePoster={handlePoster}
                handleDeletePoster={handleDeletePoster}
              />
            );
          })
        ) : (
          <div>작성한 게시글이 없습니다</div>
        )}

        {modalVisible && (
          <Modal visible={modalVisible} onClose={handlerModalClose} width="1000px" height="650px">
            <ModalTitleWrapper>
              <ModalTitle>게시글 수정</ModalTitle>
              <ModalTitleButton onClick={handlerModalClose}>x</ModalTitleButton>
            </ModalTitleWrapper>
            <MyhomeModal posts={currentPosts} postId={postId} imageValue={imageValue} />
          </Modal>
        )}
      </PostsWrapper>

      <Pagination totalPosts={posts.length} postPerPage={postPerPage} paginate={changePage} />
    </UserPostContainer>
  );
};
export default UserPost;
