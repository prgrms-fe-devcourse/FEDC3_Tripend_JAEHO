import { useEffect } from 'react';
import { UserInfoContainer, UserInfoWrapper } from './style';
import { useGetMyHomeUserInfo } from '../../../hooks/useGetMyHomeUserInfo';
import Avatar from '../../common/Avatar';
import styled from '@emotion/styled';

const UserInfo = () => {
  const { profile, getUserData } = useGetMyHomeUserInfo();

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

const UserInfoProfileWrapper = styled.div`
  margin-left: 20px;
`;
