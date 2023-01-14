import UserList from './UserList';
import UserSearchBar from './UserSearchBar';
import { SidebarRightContainer } from './style';

const SideBarRight = () => {
  return (
    <SidebarRightContainer>
      <UserSearchBar />
      <UserList />
    </SidebarRightContainer>
  );
};

export default SideBarRight;
