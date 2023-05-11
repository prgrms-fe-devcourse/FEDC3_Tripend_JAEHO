import CloseIcon from '@mui/icons-material/Close';
import { useSetRecoilState } from 'recoil';
import { isVisibleModalState } from '@/recoil/addPostStates';
import Modal from '@/components/Common/Modal';
import AddPostForm from './AddPostForm';
import { CloseButton, ModalHeader, Title } from './style';

interface AddPostProps {
  visible: boolean;
}

const AddPost = ({ visible }: AddPostProps) => {
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
