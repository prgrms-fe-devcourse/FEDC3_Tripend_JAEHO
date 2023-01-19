import SearchIcon from '@mui/icons-material/Search';
import useGetUserInfo from '../../../hooks/useGetUserInfo';
import Avatar from '../../c/Avatar';
import {
  SearchResult,
  UserInfo,
  UserListTitle,
  UserName,
  UserSearchBarContainer,
  UsersSearchBar,
} from './style';

const UserSearchBar = () => {
  const { keyword, setKeyword, result } = useGetUserInfo();

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
