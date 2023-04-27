import { Menu, MenuItem } from './style';

interface UserPageSidebarProps {
  onclickMenu(id: string): void;
}

const UserPageSidebar = ({ onclickMenu }: UserPageSidebarProps) => {
  const menu = [
    { name: '작성한 글', id: 'myPostList' },
    { name: '내 정보 수정', id: 'myInfo' },
  ];

  return (
    <Menu>
      {menu.map(({ name, id }) => (
        <MenuItem key={id} onClick={() => onclickMenu(id)}>
          {name}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default UserPageSidebar;
