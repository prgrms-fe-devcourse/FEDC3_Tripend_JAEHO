import { useEffect, useState } from 'react';
import { getUser } from '../../../apis/auth';
import { getMyPostDetail, removePost } from '../../../apis/post';
import MyhomeModal from '../../Modal/MyhomeModal';
import Modal from '../../Modal';
import { PostWrapper } from '../../../pages/MyPosterPage/style';
import { ModalTitle, ModalTitleButton, ModalTitleWrapper } from './style';
import UserPosterItem from '../UserPosteItem';
import { ERROR_MESSAGE_AUTH, ERROR_MESSAGE_SIGNIN, USER } from '../../../utils/constant/auth';
import { useRecoilState, useRecoilValue } from 'recoil';
import { uploadImageState } from '../../../recoil/uploadImage';

const LoginPoster = () => {
  const [getLoginData, setLoginData] = useState({});
  const [postId, setPostId] = useState('');
  const [visible, setVisible] = useState(false);
  const [postDetail, setPostDetail] = useState({});

  const [imageValue, setImageValue] = useRecoilState(uploadImageState);
  const getUserData = async () => {
    const getLoginUserData = await getUser();
    setLoginData(getLoginUserData.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handlePoster = async (id) => {
    const getpostDetail = await getMyPostDetail(id);
    setVisible(true);
    setPostId(id);
    setPostDetail(getpostDetail);
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
            <MyhomeModal postDetail={postDetail} postId={postId} imageValue={imageValue} />
          </Modal>
        )}
      </PostWrapper>
    </>
  );
};
export default LoginPoster;
