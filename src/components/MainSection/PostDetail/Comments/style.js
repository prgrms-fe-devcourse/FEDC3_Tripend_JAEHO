import styled from '@emotion/styled';

export const CommentCount = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 10px;
`;

export const InputContainer = styled.form`
  display: flex;
  padding-bottom: 10px;
  & > img {
    width: 24px;
    height: 24px;
    padding-right: 10px;
  }
  & > input {
    font-size: 14px;
    padding: 5px;
    width: calc(100% - 50px);
  }

  & > input:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const CommentContainer = styled.div`
  max-height: calc(100% - 80px);
  overflow-y: auto;
`;
