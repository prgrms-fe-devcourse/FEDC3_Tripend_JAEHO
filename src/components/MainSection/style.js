import styled from '@emotion/styled';

export const PostsContainer = styled.div`
  width: calc(100% - 560px);
  min-width: 800px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const NotFoundResultContainer = styled.div`
  width: 500px;
  height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 20px;
`;
