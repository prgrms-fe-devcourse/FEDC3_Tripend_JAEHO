import { getUser } from '../../../apis/auth';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { UserInfoContainer } from './style';

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
