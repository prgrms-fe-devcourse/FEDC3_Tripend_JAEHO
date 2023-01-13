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
          {menus.map(({ path, name }, index) => {
            return (
              <NavLink
                style={{ color: 'gray', textDecoration: 'none' }}
                to={path}
                key={index}
                activeStyle={{ color: 'black' }}
              >
                {
                  <ul>
                    <li>{name}</li>
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
