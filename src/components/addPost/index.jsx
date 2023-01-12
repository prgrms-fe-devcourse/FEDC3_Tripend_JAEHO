import { useSetRecoilState } from 'recoil';

import Modal from '../Modal';
import AddPostForm from './addPostForm';
import { isVisibleModalState } from '../../utils/addPostState';

import { ModalHeader, CloseButton, ModalTitle } from './style';

const AddPost = ({ visible }) => {
  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);

  const modalStyle = {
    padding: 34,
    borderRadius: 10,
  };

  const handleCloseAddPostModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <Modal
      width={1100}
      height={600}
      visible={visible}
      onClose={handleCloseAddPostModal}
      style={modalStyle}
    >
      <ModalHeader>
        <ModalTitle>새 게시글 만들기</ModalTitle>
        <CloseButton onClick={handleCloseAddPostModal}>닫기</CloseButton>
      </ModalHeader>
      <AddPostForm />
    </Modal>
  );
};

export default AddPost;
