import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getUserInfo } from '../../../../apis/user';
import useDebounce from '../../../../hooks/useDebounce';
import { encodeKeyword } from '../../../../utils/validate/userList';
import Avatar from '../../../Common/Avatar';
import {
  SearchResult,
  UserInfo,
  UserListTitle,
  UserName,
  UserSearchBarContainer,
  UsersSearchBar,
} from './style';

const UserSearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);

  const getUserInfoData = async (encodedKeyword) => {
    const { data } = await getUserInfo(encodedKeyword);
    setResult(data);
  };

  useDebounce(
    () => {
      if (keyword !== '') {
        getUserInfoData(encodeKeyword(keyword));
      } else setResult([]);
    },
    300,
    [keyword]
  );

  return (
    <div>
      <UserListTitle>유저 목록</UserListTitle>
      <UserSearchBarContainer style={{ color: '#86879C' }}>
        <SearchIcon />
        <UsersSearchBar
          vlaue={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="유저를 검색하세요"
          className="usersSearchBar"
        />
      </UserSearchBarContainer>
      <SearchResult>
        {result ? (
          <>
            {result.map((userInfo) => (
              <UserInfo key={userInfo._id}>
                <Avatar src={userInfo.image} size="24px" lazy={true} threshold={0.5} />
                <UserName>{userInfo.fullName}</UserName>
              </UserInfo>
            ))}
          </>
        ) : (
          <>User does not exist!</>
        )}
      </SearchResult>
    </div>
  );
};

export default UserSearchBar;
