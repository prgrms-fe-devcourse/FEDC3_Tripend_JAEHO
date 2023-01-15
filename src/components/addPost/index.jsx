import { useSetRecoilState } from 'recoil';

import Modal from '../Modal';
import AddPostForm from './addPostForm';
import { isVisibleModalState } from '../../recoil/addPostStates';

import { ModalHeader, CloseButton, Title } from './style';
import CloseIcon from '@mui/icons-material/Close';

const AddPost = ({ visible }) => {
  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);

  const handleCloseAddPostModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <Modal
      width={1100}
      height={600}
      visible={visible}
      onClose={handleCloseAddPostModal}
      style={{
        padding: '28px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <ModalHeader>
        <Title>새 게시글 만들기</Title>
        <CloseButton onClick={handleCloseAddPostModal}>
          <CloseIcon style={{ color: '#9D9D99' }} />
        </CloseButton>
      </ModalHeader>
      <AddPostForm />
    </Modal>
  );
};

export default AddPost;
