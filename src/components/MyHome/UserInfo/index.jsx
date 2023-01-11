import { getUser } from '../../../apis/auth';
import { useEffect, useState } from 'react';

const Index = () => {
  const [getLoginData, setLoginData] = useState({});
  const [name, setName] = useState('');

  const getUserData = async () => {
    const getLoginUserData = await getUser();

    setLoginData(getLoginUserData.data);
    setName(getLoginUserData.data.fullName.split('/')[0]);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h2>{getLoginData.email}</h2>
      <h3>{name}</h3>
    </>
  );
};
export default Index;
