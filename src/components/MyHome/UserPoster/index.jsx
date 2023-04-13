import { PosterContainer, PosterTitle, PostWrapper } from '../../../pages/MyPosterPage/style';
import Modal from '../../Modal';
import MyhomeModal from '../../Modal/MyhomeModal';
import UserPosterItem from '../UserPosteItem';
import { ModalTitle, ModalTitleButton, ModalTitleWrapper } from './style';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getUser } from '../../../apis/auth';
import {
  myHomeModalState,
  uploadImageState,
  userLoginDateState,
} from '../../../recoil/uploadImageState';
import Pagination from '../../Pagination';

import { getMyPostDetail } from '../../../apis/post';

const LoginPoster = () => {
  const [postId, setPostId] = useState('');
  const [visible, setVisible] = useRecoilState(myHomeModalState);
  const [postDetail, setPostDetail] = useRecoilState(userLoginDateState);
  const [imageValue, setImageValue] = useRecoilState(uploadImageState);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePoster = async (id) => {
    const getPostDetail = await getMyPostDetail(id);
    setVisible(true);
    setPostId(id);
    setPostDetail(getPostDetail);
  };

  const handlerModalClose = () => {
    setVisible(false);
    setImageValue(null);
  };

  const handleDeletePoster = async (id) => {
    swal({
      title: USER.DELETE_POSTER,
      text: USER.DELETE,
      icon: ERROR_MESSAGE_SIGNIN.DELETE_POSTER_WARNING,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await removePost(id);

        setPosts({
          ...posts,
          posts: posts.filter((post) => post._id !== id),
        });
      }
    });
  };

  useEffect(() => {
    const getUserData = async () => {
      const getLoginUserData = await getUser();

      setPosts(getLoginUserData.data.posts);
      setLoading(false);
    };
    getUserData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PosterContainer>
      <PosterTitle>작성한 글</PosterTitle>

      <PostWrapper>
        {currentPosts &&
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
          })}

        {visible && (
          <Modal visible={visible} onClose={handlerModalClose} width="1000px" height="650px">
            <ModalTitleWrapper>
              <ModalTitle>게시글 수정</ModalTitle>
              <ModalTitleButton onClick={handlerModalClose}>x</ModalTitleButton>
            </ModalTitleWrapper>
            <MyhomeModal posts={currentPosts} postId={postId} imageValue={imageValue} />
          </Modal>
        )}
      </PostWrapper>

      <Pagination
        posts={posts}
        totalPosts={posts.length}
        postPerPage={postPerPage}
        paginate={paginate}
      />
    </PosterContainer>
  );
};
export default LoginPoster;
