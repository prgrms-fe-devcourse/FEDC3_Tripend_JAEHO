import { Text, Menu, MenuItem } from './style';

interface UserPageSidebarProps {
  targetId: string;
  onclickMenu(id: string): void;
}

const UserPageSidebar = ({ targetId, onclickMenu }: UserPageSidebarProps) => {
  const menu = [
    { name: '작성한 글', id: 'myPostList' },
    { name: '내 정보 수정', id: 'myInfo' },
  ];

  return (
    <Menu>
      {menu.map(({ name, id }) => (
        <MenuItem key={id} onClick={() => onclickMenu(id)}>
          <Text isClicked={targetId === id}>{name}</Text>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default UserPageSidebar;
