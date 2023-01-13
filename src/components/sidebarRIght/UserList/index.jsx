import * as style from './style';
import { useEffect, useState } from 'react';
import { getUsers, getClickedUserInfo } from '../../../apis/user';
import { extractName } from '../../../utils/validate/userList';
import Avatar from '../../common/Avatar';

const UserList = () => {
  const [userInfos, setUserInfos] = useState([]);

  const getUserData = async () => {
    const { data } = await getUsers();
    setUserInfos(data);
  };

  const showUserDetail = async (currentUserId) => {
    await getClickedUserInfo(currentUserId);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {userInfos ? (
        <style.UserListContainer id="userInfoList">
          {userInfos.map(({ _id, image, fullName }) => (
            <style.UserInfo key={_id} onClick={() => showUserDetail(_id)}>
              <Avatar shape="circle" size="24px" src={image} lazy={true} threshold={0.5} />
              <span>{extractName.exec(fullName)[0]}</span>
            </style.UserInfo>
          ))}
        </style.UserListContainer>
      ) : (
        <>User does not exist!</>
      )}
    </div>
  );
};

export default UserList;
