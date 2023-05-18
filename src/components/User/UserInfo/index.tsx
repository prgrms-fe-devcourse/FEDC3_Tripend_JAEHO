import { useEffect, useState } from 'react';
import { getUser } from '@/apis/auth';
import Avatar from '@/components/Common/Avatar';
import { UserInfoContainer, UserInfoProfileWrapper, UserInfoWrapper } from './style';
import { useQuery } from 'react-query';

interface Profile {
  fullName: string;
  image: string;
  email: string;
}

const UserInfo = () => {
  const { data: profile, isLoading } = useQuery<Profile>(['userData'], getUser);

  return (
    <UserInfoContainer>
      <UserInfoWrapper>
        <Avatar
          shape="circle"
          size="100px"
          src={isLoading ? undefined : profile?.image}
          lazy={true}
          threshold={0.1}
        />
        <UserInfoProfileWrapper>
          <h3>{isLoading ? '로딩중...' : profile?.fullName.split('/')[0]}</h3>
          <p>{isLoading ? '로딩중...' : profile?.email}</p>
        </UserInfoProfileWrapper>
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};
export default UserInfo;
