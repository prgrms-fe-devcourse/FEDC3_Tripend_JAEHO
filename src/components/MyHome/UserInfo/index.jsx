import { getUser } from '../../../apis/auth';
import { useEffect, useState } from 'react';
import { UserInfoContainer, UserInfoWrapper } from './style';

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
