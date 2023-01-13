import * as style from './style';
import { useState } from 'react';
import { encodeKeyword } from '../../../utils/validate/userList';
import { getUserInfo } from '../../../apis/user';
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from '../../../hooks/useDebounce';
import Avatar from '../../common/Avatar';

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
      <style.UserListTitle>유저 목록</style.UserListTitle>
      <style.UserSearchBarContainer style={{ color: '#86879C' }}>
        <SearchIcon />
        <style.UserSearchBar
          vlaue={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="유저를 검색하세요"
        />
      </style.UserSearchBarContainer>
      <style.SearchResult>
        {result ? (
          <>
            {result.map((userInfo) => (
              <style.UserInfo key={userInfo._id}>
                <Avatar src={userInfo.image} size="30px" lazy={true} threshold={0.5} />
                <span>{userInfo.fullName}</span>
              </style.UserInfo>
            ))}
          </>
        ) : (
          <>User does not exist!</>
        )}
      </style.SearchResult>
    </div>
  );
};

export default UserSearchBar;
