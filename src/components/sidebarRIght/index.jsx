import * as style from './style';
import UserList from './UserList';
import UserSearchBar from './UserSearchBar';

const SideBarRight = () => {
  return (
    <style.SidebarRightContainer>
      <h2>유저 목록</h2>
      <UserSearchBar />
      <UserList />
    </style.SidebarRightContainer>
  );
};

export default SideBarRight;
