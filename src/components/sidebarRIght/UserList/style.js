import styled from '@emotion/styled';

export const UserListContainer = styled.ul`
  display: block;
  margin-top: 20px;
  margin-left: 20px;
  width: 220px;
  padding: 0;
  list-style: none;
  overflow-y: scroll;
`;

export const UserInfo = styled.li`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 3px 0;
  & > span {
    padding-left: 8px;
  }
`;
