import { useEffect } from 'react';
import useGetUserList from '../../../hooks/useGetUserList';
import { extractName } from '../../../utils/validate/userList';
import Avatar from '../../common/Avatar';
import { UserInfo, UserListContainer, UserName } from './style';

const UserList = () => {
  const { userInfos, getUserData, showUserDetail } = useGetUserList();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {userInfos ? (
        <UserListContainer id="userInfoList">
          {userInfos.map(({ _id, image, fullName }) => (
            <UserInfo key={_id} onClick={() => showUserDetail(_id)}>
              <Avatar shape="circle" size="24px" src={image} lazy={true} threshold={0.1} />
              <UserName>{extractName.exec(fullName)[0]}</UserName>
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
