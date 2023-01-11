import styled from '@emotion/styled';

export const CommentCount = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 10px;
`;

export const InputContainer = styled.form`
  display: flex;
  padding-bottom: 20px;
  & > img {
    width: 24px;
    height: 24px;
    padding-right: 10px;
  }
  & > input {
    font-size: 14px;
  }
`;

export const CommentContainer = styled.div`
  height: 200px;
  overflow-y: scroll;
`;
