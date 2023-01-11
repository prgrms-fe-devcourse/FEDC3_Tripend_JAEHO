import { useState } from 'react';
import * as style from './style';
import { encodeKeyword } from '../../../utils/validate/userList';
import { getUserInfo } from '../../../apis/user';
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
      <style.UserSearchBar
        vlaue={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="유저를 검색하세요"
      />
      <style.SearchResult>
        {result ? (
          <>
            {result.map((userInfo) => (
              <li key={userInfo._id}>
                <Avatar
                  src={userInfo.image}
                  size={30}
                  style={{ borderRadius: '16px' }}
                  lazy={true}
                  threshold={0.5}
                />
                {userInfo.fullName}
              </li>
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
