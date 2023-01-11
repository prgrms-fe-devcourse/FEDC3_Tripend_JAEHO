import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getUser } from '../../../apis/auth';
import { getMyPostDetail, removePost } from '../../../apis/post';

const LoginPoster = () => {
  const [getLoginData, setLoginData] = useState({});
  const [Poster, setPoster] = useState([]);

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
    console.log(id);
    setVisible(true);

    const todo = await getMyPostDetail(id);
    setPostDetail(todo);
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

  // 클릭을 했을때 클릭한 post 정보가 모달에 들어가야함

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

        {/*<Modal visible={visible} onClose={handlePoster} width="500px" height="600px">*/}
        {/*  <h1>fdsadf</h1>*/}
        {/*  <button onClick={handlerModalClose}>x</button>*/}
        {/*</Modal>*/}
      </PostWrapper>
    </>
  );
};
export default LoginPoster;

const PostTitle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 30%;
  width: 50%;
  bottom: 25%;

  justify-content: space-between;
`;

const PostButton = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  position: absolute;
  right: 10%;
  bottom: 40%;
  color: #cccbc7;
  button {
    margin-right: 10px;
  }
`;

const ImageContainer2 = styled.div`
  width: 100px;
  margin: 20px;
  border-radius: 16px;
  background-color: #eee;
  > img {
    transition: opacity 0.4s ease-out;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PostContainer2 = styled.div`
  position: relative;
  height: 100px;
  margin: 10px;
  width: 50%;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
