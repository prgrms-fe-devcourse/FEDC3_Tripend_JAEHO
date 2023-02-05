import { Menu, MenuItem, Side, SideBlock } from './style';

const UserSidebar = ({ onclickMenu }) => {
  const menu = [
    { name: '작성한 글', id: 'myPostList' },
    { name: '내 정보 수정', id: 'myInfo' },
  ];

  const handleMenu = (id) => {
    setTargetId(id);
  };

  return (
    <SideBlock>
      <Side>
        <Menu>
          {menu.map(({ name, id }) => (
            <MenuItem key={id} onClick={() => onclickMenu(id)}>
              {name}
            </MenuItem>
          ))}
        </Menu>
      </Side>
    </SideBlock>
  );
};

export default UserSidebar;
