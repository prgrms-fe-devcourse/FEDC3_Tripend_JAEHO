import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getUser } from '../apis/auth';
import { getMyPostDetail, removePost } from '../apis/post';
import { myHomeModalState, uploadImageState, userLoginDateState } from '../recoil/uploadImageState';
import { ERROR_MESSAGE_SIGNIN, USER } from '../utils/constants/auth';

export const usePoster = () => {
  const [postId, setPostId] = useState('');
  const [visible, setVisible] = useRecoilState(myHomeModalState);
  const [postDetail, setPostDetail] = useRecoilState(userLoginDateState);
  const [imageValue, setImageValue] = useRecoilState(uploadImageState);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePoster = async (id) => {
    const getPostDetail = await getMyPostDetail(id);
    setVisible(true);
    setPostId(id);
    setPostDetail(getPostDetail);
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

        setPosts({
          ...posts,
          posts: posts.filter((post) => post._id !== id),
        });
      }
    });
  };

  useEffect(() => {
    const getUserData = async () => {
      const getLoginUserData = await getUser();

      setPosts(getLoginUserData.data.posts);
      setLoading(false);
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
    posts,
    loading,
  };
};
