import styled from '@emotion/styled';

const SideBlock = styled.div`
  background: #f8f9fa;
`;

const Side = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
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
  background: #f8f9fa;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 1rem;
  font-size: 1rem;
}
`;

export { SideBlock, Side, Menu, MenuItem };
