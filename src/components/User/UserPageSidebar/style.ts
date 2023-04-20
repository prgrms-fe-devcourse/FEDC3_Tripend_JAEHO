import styled from '@emotion/styled';

const SideBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #cccbc7;
  cursor: pointer;
  position: absolute;
  left: 8%;
  bottom: 35%;
  width: 200px;
  height: 20%;
  padding: 10px;
`;

const Menu = styled.ul`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 1rem;
  font-size: 1rem;
`;

export { SideBlock, Menu, MenuItem };
