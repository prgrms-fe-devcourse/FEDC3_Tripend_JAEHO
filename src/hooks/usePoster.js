import { useRecoilState } from 'recoil';
import { myhomeModalState, uploadImageState, userLoginDateState } from '../recoil/uploadImageState';
import { getMyPostDetail, removePost } from '../apis/post';
import { ERROR_MESSAGE_SIGNIN, USER } from '../utils/constant/auth';
import { getUser } from '../apis/auth';
import { useEffect, useState } from 'react';

export const usePoster = () => {
  const [getLoginData, setLoginData] = useState({});
  const [postId, setPostId] = useState('');
  const [visible, setVisible] = useRecoilState(myhomeModalState);

  const [postDetail, setPostDetail] = useRecoilState(userLoginDateState);

  const [imageValue, setImageValue] = useRecoilState(uploadImageState);

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

  useEffect(() => {
    const getUserData = async () => {
      const getLoginUserData = await getUser();

      setLoginData(getLoginUserData.data);
    };

    getUserData();
  }, []);
  return {
    handlePoster,
    handlerModalClose,
    handleDeletePoster,
    postId,
    postDetail,
    visible,
    imageValue,
    getLoginData,
  };
};
