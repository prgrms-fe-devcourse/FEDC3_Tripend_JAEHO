import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

function Sidebar() {
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
}

export default Sidebar;

const SideBlcok = styled.div``;

const Side = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  min-height: 27px;
  color: #cccbc7;
  cursor: pointer;
  padding-left: 10px;
  position: fixed;
  left: 10%;
  top: 30%;
  bottom: 0;
  width: 200px;
  height: 50%;
  border-right: 1px solid #dee2e6;
  z-index: 10;
`;

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;
const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
