import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { encodeKeyword } from '@/utils/validate/userList';
import SearchResult from './SearchResult';
import { UserListTitle, UserSearchBarContainer, UsersSearchBar } from './style';

const UserSearchBar = () => {
  const [tempKeyword, setTempKeyword] = useState('');
  const [keyword, setKeyword] = useState('');

  useDebounce(
    () => {
      if (tempKeyword !== '') {
        setKeyword(encodeKeyword(tempKeyword));
      } else setKeyword('');
    },
    300,
    [tempKeyword]
  );

  return (
    <div>
      <UserListTitle>유저 목록</UserListTitle>
      <UserSearchBarContainer style={{ color: '#86879C' }}>
        <SearchIcon />
        <UsersSearchBar
          value={tempKeyword}
          onChange={(e) => setTempKeyword(e.target.value)}
          type="text"
          placeholder="유저를 검색하세요"
          className="usersSearchBar"
        />
      </UserSearchBarContainer>
      <SearchResult keyword={keyword} />
    </div>
  );
};

export default UserSearchBar;
