import styled from '@emotion/styled';

export const UserListTitle = styled.div`
  margin: 20px 20px 0 20px;
  font-size: 16px;
  font-weight: bold;
`;
export const UserSearchBarContainer = styled.div`
  display: flex;
  margin: 20px 20px 0 20px;
  background-color: var(--gray);
  width: 220px;
  height: 40px;
  padding-inline-start: 10px;
  border-radius: 5.5px;
  align-items: center;
`;
export const UserSearchBar = styled.input`
  background-color: var(--gray);
`;

export const SearchResult = styled.div`
  list-style: none;
  margin: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.li`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 3px 0;
  &:last-of-type {
    margin-bottom: 20px;
  }
  & > span {
    padding-left: 8px;
  }
`;
