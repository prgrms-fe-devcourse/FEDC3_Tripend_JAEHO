import * as style from './style';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../apis/user';
import { extractName } from '../../../utils/validate/userList';

const UserList = () => {
  const [userNames, setUserNames] = useState([]);
  const [userInfos, setUserInfos] = useState([]);

  const getUsetData = async () => {
    const { data } = await getUsers();
    setUserInfos(data);
  };

  useEffect(() => {
    getUsetData();
  }, []);

  return (
    <div>
      {userNames ? (
        <style.UserListContainer>
          {userInfos.map((userInfo) => (
            <li key={userInfo._id}>{extractName.exec(userInfo.fullName)[0]}</li>
          ))}
        </style.UserListContainer>
      ) : (
        <>User does not exist!</>
      )}
    </div>
  );
};

export default UserList;
