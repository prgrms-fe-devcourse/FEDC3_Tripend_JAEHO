import { useState } from 'react';
import { getUser } from '../apis/auth';

export const useGetMyHomeUserInfo = () => {
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

  return { profile, getUserData };
};
