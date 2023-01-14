import { useEffect, useState } from 'react';
import { getUser } from '../../../apis/auth';
import { getMyPostDetail, removePost } from '../../../apis/post';
import MyhomeModal from '../../Modal/MyhomeModal';
import Modal from '../../Modal';
import { PosterContainer, PosterTitle, PostWrapper } from '../../../pages/MyPosterPage/style';
import { ModalTitle, ModalTitleButton, ModalTitleWrapper } from './style';
import UserPosterItem from '../UserPosteItem';
import { ERROR_MESSAGE_AUTH, ERROR_MESSAGE_SIGNIN, USER } from '../../../utils/constant/auth';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { div } from '@emotion/styled';
import { uploadImageState, userLoginDateState } from '../../../recoil/uploadImageState';

const LoginPoster = () => {
  const [getLoginData, setLoginData] = useState({});
  const [postId, setPostId] = useState('');
  const [visible, setVisible] = useState(false);

  const [postDetail, setPostDetail] = useRecoilState(userLoginDateState);

  const [imageValue, setImageValue] = useRecoilState(uploadImageState);

  useEffect(() => {
    const getUserData = async () => {
      const getLoginUserData = await getUser();
      setLoginData(getLoginUserData.data);
    };

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

        setLoginData({
          ...getLoginData,
          posts: getLoginData.posts.filter((post) => post._id !== id),
        });
      }
    });
  };

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
            <MyhomeModal posts={getLoginData.posts} postId={postId} imageValue={imageValue} />
          </Modal>
        )}
      </PostWrapper>
    </PosterContainer>
  );
};
export default LoginPoster;
