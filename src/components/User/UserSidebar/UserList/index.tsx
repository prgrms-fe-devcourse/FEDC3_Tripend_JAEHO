import { getUsers } from '@/apis/user';
import Avatar from '@/components/Common/Avatar';
import Badge from '@/components/Common/Icons/Badge';
import { extractName } from '@/utils/validate/userList';
import { useQuery } from 'react-query';
import { UserInfos } from '../type';
import { UserInfo, UserListContainer, UserName } from './style';

const UserList = () => {
  const { data: userInfos, isLoading } = useQuery<UserInfos[]>(['usersData'], getUsers);

  if (isLoading) return <>로딩중...</>;

  const isValidExtractName = (fullName: string) => {
    const result = extractName.exec(fullName);

    return result !== null ? result[0] : '';
  };

  return (
    <div>
      {userInfos ? (
        <UserListContainer id="userInfoList">
          {userInfos.map(({ _id, image, fullName, isOnline }) => (
            <UserInfo key={_id}>
              <Avatar shape="circle" size="24px" src={image} lazy={true} threshold={0.1} />
              <UserName>{isValidExtractName(fullName)}</UserName>
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
