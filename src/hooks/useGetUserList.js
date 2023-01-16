import { useState } from 'react';
import { getClickedUserInfo, getUsers } from '../apis/user';

const useGetUserList = () => {
  const [userInfos, setUserInfos] = useState([]);

  const getUserData = async () => {
    const { data } = await getUsers();
    setUserInfos(data);
  };

  const showUserDetail = async (currentUserId) => {
    await getClickedUserInfo(currentUserId);
  };

  return {
    userInfos,
    getUserData,
    showUserDetail,
  };
};

export default useGetUserList;
