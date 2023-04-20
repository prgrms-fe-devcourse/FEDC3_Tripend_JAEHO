import styled from '@emotion/styled';

const PageContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;

  li {
    list-style: none;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
      background-color: #55d4a9;
    }
  }
`;

const PageUl = styled.ul``;

const PageLi = styled.li`
  display: inline-block;
  background: #dee2e6;
  overflow: hidden;
  margin: 5px;

  a {
    display: block;
    padding: 5px 10px;
    color: #495057;
    text-decoration: none;
  }
`;

export { PageContainer, PageUl, PageLi };
