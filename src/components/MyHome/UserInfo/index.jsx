import { useEffect, useState } from 'react';
import { getUser } from '../../../apis/auth';
import Avatar from '../../Common/Avatar';
import { UserInfoContainer, UserInfoProfileWrapper, UserInfoWrapper } from './style';

const UserInfo = () => {
  const [profile, setProfile] = useState({
    name: '',
    image: '',
    email: '',
  });

  const getUserData = async () => {
    const { data } = await getUser();

    setProfile({
      name: data.fullName.split('/')[0],
      image: data.image,
      email: data.email,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserInfoContainer>
      <UserInfoWrapper>
        <Avatar shape="circle" size="100px" src={profile.image} lazy={true} threshold={0.1} />

        <UserInfoProfileWrapper>
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
        </UserInfoProfileWrapper>
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};
export default UserInfo;
