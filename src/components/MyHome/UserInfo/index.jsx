import { useEffect } from 'react';
import { UserInfoContainer, UserInfoWrapper } from './style';
import { useGetMyhomeUserInfo } from '../../../hooks/useGetMyhomeUserInfo';
import { getStorage } from '../../../utils/storage';
import { USERIMAGE } from '../../../utils/constant/auth';
import Avatar from '../../Common/Avatar';
import styled from '@emotion/styled';

const UserInfo = () => {
  const { profile, getUserData } = useGetMyhomeUserInfo();
  const userImage = getStorage(USERIMAGE);
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
