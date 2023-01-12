import { NavLink } from 'react-router-dom';
import { Menu, Side, SideBlcok } from './style';

const UserSidebar = () => {
  const menus = [
    { name: '작성한 글', path: '/myhome' },
    { name: '내 정보 수정', path: '/setting' },
  ];

  return (
    <SideBlcok>
      <Side>
        <Menu>
          {menus.map((menu, index) => {
            return (
              <NavLink
                exact
                style={{ color: 'gray', textDecoration: 'none' }}
                to={menu.path}
                key={index}
                activeStyle={{ color: 'black' }}
              >
                {
                  <ul>
                    <li>{menu.name}</li>
                  </ul>
                }
              </NavLink>
            );
          })}
        </Menu>
      </Side>
    </SideBlcok>
  );
};

export default UserSidebar;
