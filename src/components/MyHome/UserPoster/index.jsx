import MyhomeModal from '../../Modal/MyhomeModal';
import Modal from '../../Modal';
import { PosterContainer, PosterTitle, PostWrapper } from '../../../pages/MyPosterPage/style';
import { ModalTitle, ModalTitleButton, ModalTitleWrapper } from './style';
import UserPosterItem from '../UserPosteItem';

import { usePoster } from '../../../hooks/usePoster';
import { useState } from 'react';
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

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 페이지당 포스트 개수
  const [postPerPage, setPostPerPage] = useState(3);

  // 1*3  3 포스트
  const indexOfLastPost = currentPage * postPerPage;
  // 3-3 = 0번포스트
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // 0~2번까지 포스트
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 클릭이벤트 페이지 바꾸기
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
          <Modal visible={visible} onClose={handlerModalClose} width="1000px" height="600px">
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
