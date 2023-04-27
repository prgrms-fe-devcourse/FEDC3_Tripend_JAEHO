import styled from '@emotion/styled';

const Menu = styled.ul`
  width: 240px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  background-color: var(--white);
  box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
  border-radius: 12px;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 0 20px;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  border-bottom: 1px solid #d7e2ee;
  /* &:hover {
    background-color: var(--background-color);
  } */
  &:last-of-type {
    border-bottom: 0;
  }
`;

export { Menu, MenuItem };
