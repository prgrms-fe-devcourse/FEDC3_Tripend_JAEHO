import UserList from './UserList';
import UserSearchBar from './UserSearchBar';
import { UserSidebarContainer } from './style';

const UserSidebar = () => {
  return (
    <UserSidebarContainer>
      <UserSearchBar />
      <UserList />
    </UserSidebarContainer>
  );
};

export default UserSidebar;
