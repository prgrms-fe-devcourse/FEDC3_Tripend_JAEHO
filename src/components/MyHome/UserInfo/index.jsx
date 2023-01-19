import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useGetMyhomeUserInfo } from '../../../hooks/useGetMyhomeUserInfo';
import Avatar from '../../Common/Avatar';
import { UserInfoContainer, UserInfoWrapper } from './style';

const UserInfo = () => {
  const { profile, getUserData } = useGetMyhomeUserInfo();
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
