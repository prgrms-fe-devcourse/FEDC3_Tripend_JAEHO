import { getUser } from '../../../apis/auth';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const UserInfo = () => {
  const [profile, setProfile] = useState({
    name: '',
    image: '',
    email: '',
  });

  const getUserData = async () => {
    const getLoginUserData = await getUser();

    const { data } = getLoginUserData;
    const loginUserName = data.fullName.split('/')[0];

    setProfile({
      ...profile,

      name: loginUserName,
      image: data.image,
      email: data.email,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <UserInfoContainer>
        <img
          src={profile.image}
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
          alt="프로필 이미지"
        />
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
        </div>
      </UserInfoContainer>
    </>
  );
};
export default UserInfo;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  width: 20%;
  height: 100px;
  margin-top: 20px;
  margin-left: 100px;
  padding: 10px;
  background-color: #fff;
  img {
    margin-right: 20px;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #8d8d8d;
  }
`;
