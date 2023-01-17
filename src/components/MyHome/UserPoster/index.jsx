import MyhomeModal from '../../Modal/MyhomeModal';
import Modal from '../../Modal';
import { PosterContainer, PosterTitle, PostWrapper } from '../../../pages/MyPosterPage/style';
import { ModalTitle, ModalTitleButton, ModalTitleWrapper } from './style';
import UserPosterItem from '../UserPosteItem';

import { usePoster } from '../../../hooks/usePoster';

const LoginPoster = () => {
  const {
    handlePoster,
    handleDeletePoster,
    handlerModalClose,
    postId,
    visible,
    imageValue,
    getLoginData,
  } = usePoster();

  return (
    <PosterContainer>
      <PosterTitle>작성한 글</PosterTitle>

      <PostWrapper>
        {getLoginData.posts &&
          getLoginData.posts.map(({ _id, title, image }) => {
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
            <MyhomeModal posts={getLoginData.posts} postId={postId} imageValue={imageValue} />
          </Modal>
        )}
      </PostWrapper>
    </PosterContainer>
  );
};
export default LoginPoster;
