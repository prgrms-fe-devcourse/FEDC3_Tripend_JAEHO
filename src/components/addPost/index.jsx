import React from 'react';
import Modal from '../Modal';
import { useSetRecoilState } from 'recoil';
import { isVisibleModalState } from '../../utils/addPostState';

const AddPost = ({ visible }) => {
  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);

  const modalStyle = {
    padding: 34,
    borderRadius: 10,
  };

  const onCloseAddPostModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <Modal
      width={1100}
      height={600}
      visible={visible}
      onClose={onCloseAddPostModal}
      style={modalStyle}
    >
      <div>
        <h1>새 게시글 만들기</h1>
        <button onClick={onCloseAddPostModal}>닫기</button>
      </div>
    </Modal>
  );
};

export default AddPost;
