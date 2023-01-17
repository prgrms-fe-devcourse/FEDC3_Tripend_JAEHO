import { useEffect } from 'react';
import { UserInfoContainer, UserInfoWrapper } from './style';
import { useGetMyhomeUserInfo } from '../../../hooks/useGetMyhomeUserInfo';

const UserInfo = () => {
  const { profile, getUserData } = useGetMyhomeUserInfo();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserInfoContainer>
      <UserInfoWrapper>
        <img
          src={profile.image ? profile.image : 'https://via.placeholder.com/280x180'}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid black',
          }}
        />
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
        </div>
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};
export default UserInfo;
