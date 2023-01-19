import { PosterContainer, PosterTitle, PostWrapper } from '../../../pages/MyPosterPage/style';
import Modal from '../../Modal';
import MyhomeModal from '../../Modal/MyhomeModal';
import UserPosterItem from '../UserPosteItem';
import { ModalTitle, ModalTitleButton, ModalTitleWrapper } from './style';

import { useState } from 'react';
import { usePoster } from '../../../hooks/usePoster';
import Pagination from '../../Pagination';

const LoginPoster = () => {
  const {
    handlePoster,
    handleDeletePoster,
    handlerModalClose,
    postId,
    visible,
    imageValue,
    posts,
  } = usePoster();

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
          <Modal visible={visible} onClose={handlerModalClose} width="1000px" height="590px">
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
