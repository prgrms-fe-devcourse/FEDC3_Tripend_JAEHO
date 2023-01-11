import * as style from './style';
import UserList from './UserList';
import UserSearchBar from './UserSearchBar';

const SideBarRight = () => {
  return (
    <style.SidebarRightContainer>
      <UserSearchBar />
      <UserList />
    </style.SidebarRightContainer>
  );
};

export default SideBarRight;
