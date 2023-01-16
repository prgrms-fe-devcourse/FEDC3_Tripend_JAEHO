import styled from '@emotion/styled';

export const UserListContainer = styled.ul`
  display: block;
  margin-top: 20px;
  margin-left: 20px;
  width: 220px;
  padding: 0;
  list-style: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UserInfo = styled.li`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 3px 0;
`;

export const UserName = styled.span`
  max-width: 160px;
  padding-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
