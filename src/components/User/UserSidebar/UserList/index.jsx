import { useEffect, useState } from 'react';
import { getClickedUserInfo, getUsers } from '../../../../apis/user';
import { extractName } from '../../../../utils/validate/userList';
import Avatar from '../../../Common/Avatar';
import Badge from '../../../Common/Icons/Badge';
import { UserInfo, UserListContainer, UserName } from './style';

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
        <UserListContainer id="userInfoList">
          {userInfos.map(({ _id, image, fullName, isOnline }) => (
            <UserInfo key={_id} onClick={() => showUserDetail(_id)}>
              <Avatar shape="circle" size="24px" src={image} lazy={true} threshold={0.1} />
              <UserName>{extractName.exec(fullName)[0]}</UserName>
              <Badge
                top={'22px'}
                right={'192px'}
                size={'8px'}
                color={isOnline ? '#4aee6b' : '#7d7d7d'}
              />
            </UserInfo>
          ))}
        </UserListContainer>
      ) : (
        <>User does not exist!</>
      )}
    </div>
  );
};

export default UserList;
