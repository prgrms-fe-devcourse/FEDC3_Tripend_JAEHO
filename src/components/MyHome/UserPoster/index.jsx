import { useEffect, useState } from 'react';
import { getUser } from '../../../apis/auth';
import { getMyPostDetail, removePost } from '../../../apis/post';
import MyhomeModal from '../../Modal/MyhomeModal';
import Modal from '../../Modal';
import {
  ImageContainer2,
  PostButton,
  PostContainer2,
  PostTitle,
  PostWrapper,
} from '../../../pages/MyPosterPage/style';

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
          getLoginData.posts.map((post) => (
            <PostContainer2>
              <PostButton>
                <button onClick={() => handlePoster(post._id)}>수정</button>

                <button onClick={() => handleDeletePoster(post._id)}>삭제</button>
              </PostButton>
              <PostTitle>
                <p>{post.title.split('/')[0]}</p>
                <p style={{ marginRight: '50px' }}>{post.title.split('/')[1]}</p>
              </PostTitle>
              <ImageContainer2>
                <img
                  src={post.image ? post.image : 'https://via.placeholder.com/280x180'}
                  alt="post image"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: '16px' }}
                />
              </ImageContainer2>
            </PostContainer2>
          ))}

        {visible && (
          <Modal visible={visible} onClose={handlePoster} width="1000px" height="600px">
            <h1>fdsadf</h1>
            <button onClick={handlerModalClose}>x</button>
            <MyhomeModal postDetail={postDetail} postId={postId} />
          </Modal>
        )}
      </PostWrapper>
    </>
  );
};
export default LoginPoster;
