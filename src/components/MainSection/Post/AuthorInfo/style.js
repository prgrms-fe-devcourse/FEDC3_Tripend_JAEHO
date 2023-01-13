import styled from '@emotion/styled';

export const AuthorInfoContainer = styled.div`
  display: flex;
  width: 60%;
`;
export const AuthorInfoTextContainer = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > div:first-of-type {
    font-weight: bold;
    font-size: 14px;
  }
  & > div:last-of-type {
    font-size: 12px;
  }
`;
