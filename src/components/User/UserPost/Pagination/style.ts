import styled from '@emotion/styled';

const PageContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`;

const PageUl = styled.ul`
  list-style: none;
`;

const PageLi = styled.li<{ isCurrentPage: boolean }>`
  display: inline-block;
  background: ${({ isCurrentPage }) => (isCurrentPage ? '#dee2e6' : '#ebebeb')};
  color: #495057;
  overflow: hidden;
  border-radius: 5px;
  margin: 5px;
  padding: 5px 10px;
  font-weight: ${({ isCurrentPage }) => (isCurrentPage ? 'bold' : 'normal')};
  color: ${({ isCurrentPage }) =>
    isCurrentPage ? 'var(--font-main-color)' : '#8D91A0'};
  cursor: pointer;
  &:hover {
    background-color: #dee2e6;
  }
`;

export { PageContainer, PageUl, PageLi };
