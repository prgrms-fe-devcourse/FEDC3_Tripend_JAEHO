import { UserSidebarContainer } from './style';
import UserList from './UserList';
import UserSearchBar from './UserSearchBar';

const UserSidebar = () => {
  return (
    <UserSidebarContainer>
      <UserSearchBar />
      <UserList />
    </UserSidebarContainer>
  );
};

export default UserSidebar;
