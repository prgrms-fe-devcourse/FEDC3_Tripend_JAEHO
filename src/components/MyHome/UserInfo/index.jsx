import { useEffect } from 'react';
import { useGetMyHomeUserInfo } from '../../../hooks/useGetMyHomeUserInfo';
import Avatar from '../../Common/Avatar';
import { UserInfoContainer, UserInfoProfileWrapper, UserInfoWrapper } from './style';

const UserInfo = () => {
  const { profile, getUserData } = useGetMyHomeUserInfo();
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserInfoContainer>
      <UserInfoWrapper>
        <Avatar
          alt="title"
          shape="circle"
          size="100px"
          src={profile.image}
          lazy={true}
          threshold={0.1}
        />

        <UserInfoProfileWrapper>
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
        </UserInfoProfileWrapper>
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};
export default UserInfo;
