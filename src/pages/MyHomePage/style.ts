import styled from '@emotion/styled';

const MyPosterContainer = styled.div`
  padding: 0 100px;
  width: calc(100% - 200px);
  height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
  background-color: #fafbfc;
`;

const Article = styled.div`
  display: flex;
  gap: 38px;
`;

export { MyPosterContainer, Article };
