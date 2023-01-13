import { useEffect, useState } from 'react';
import { getUser } from '../../../apis/auth';
import { getMyPostDetail, removePost } from '../../../apis/post';
import MyhomeModal from '../../Modal/MyhomeModal';
import Modal from '../../Modal';
import { PostWrapper } from '../../../pages/MyPosterPage/style';
import { ModalTitle, ModalTitleButton, ModalTitleWrapper } from './style';
import UserPosterItem from '../UserPosteItem';

const LoginPoster = () => {
  const [getLoginData, setLoginData] = useState({});
  const [postId, setPostId] = useState('');
  const [visible, setVisible] = useState(false);
  const [postDetail, setPostDetail] = useState({});

  const getUserData = async () => {
    const getLoginUserData = await getUser();
    setLoginData(getLoginUserData.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handlePoster = async (id) => {
    setVisible(true);
    const getpostDetail = await getMyPostDetail(id);
    setPostId(id);
    setPostDetail(getpostDetail);
  };

  const handlerModalClose = () => {
    setVisible(false);
  };

  const handleDeletePoster = async (id) => {
    swal({
      title: '게시글을 삭제하시겠습니까?',
      text: '삭제하면 되돌릴수 없습니다.',
      icon: 'warning',
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await removePost(id);
      }
    });
  };

  return (
    <>
      <PostWrapper>
        {getLoginData.posts &&
          getLoginData.posts.map(({ _id, title, image }) => {
            return (
              <UserPosterItem
                key={_id}
                id={_id}
                title={title}
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
            <MyhomeModal postDetail={postDetail} postId={postId} />
          </Modal>
        )}
      </PostWrapper>
    </>
  );
};
export default LoginPoster;
